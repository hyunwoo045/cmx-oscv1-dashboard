import React, {useState} from 'react';
import {SearchBar} from "../../SearchBar";
import {Divider, Space, Table, Tabs} from "antd";
import homeListColumns from "../../../constant/columns/homeList.columns";
import commandHistoryColumns from "../../../constant/columns/commandHistory.columns";
import accessoryColumns from '../../../constant/columns/accessory.columns';
import logColumns from '../../../constant/columns/log.columns';
import {getKTDeviceList, getKTHomeList} from "../../../api/accessory";
import {getSubDevice} from "../../../api/resource";
import {KTCommandLog} from "../../../api/log";
import {matchErrMsg} from "../../../utils";
import errorMessages from "../../../constant/error.messages";
import moment from "moment";
import {withCredentials} from "../../../hocs";

const KTAppControl = () => {

    const openAPIServerErrMsg = errorMessages.OPENAPIServerErrCode.openapi;
    const commandErrMsg = errorMessages.HomeIOTControlErrCode.command;
    const reportErrMsg = errorMessages.HomeIOTControlErrCode.report;

    const [loading, setLoading] = useState(false);
    const [subDeviceLoading, setSubDeviceLoading] = useState(false);
    const [logLoading, setLogLoading] = useState(false);
    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: "",
        inputDate: "",
    });
    const [homeList, setHomeList] = useState([]);
    const [homeCommandList, setHomeCommandList] = useState([]);
    const [subDeviceList, setSubDeviceList] = useState([]);
    const [accControlLogList, setAccControlLogList] = useState([]);
    const [commandLogList, setCommandLogList] = useState([]);

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});
    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    const search = async () => {
        setLoading(true);

        const closure = {...inputs};

        const body = {
            keywords: {...closure}
        }
        const result = await getKTHomeList(body);
        setHomeList(result[0].ktHomeSeqList);
        setHomeCommandList(result[1].ktCommandHistory);

        setLoading(false);
    }

    const getSubDevices = async (homeId) => {
        setSubDeviceLoading(true);

        const closure = {...inputs};
        const body = {
            keywords: {
                homeseqno: homeId,
                userId: closure.userId,
                inputDate: closure.inputDate
            }
        }

        let list = []
        const subDevices = await getKTDeviceList(body);
        list = [...list, subDevices];

        const devices = await getSubDevice(closure.userId);
        devices.forEach(device => {
            device.subDevices.forEach(subDevice => {
                list.push({
                    ...subDevice,
                    rootUuid: device.rootUuid,
                    nickname: device.nickname
                })
            })
        })
        setSubDeviceList([...list]);
        setSubDeviceLoading(false);
    }

    const getAccLogs = async (accId) => {
        setLogLoading(true);

        const closure = {...inputs};
        const body = {
            keywords: {...closure}
        }

        const result = await KTCommandLog(body);
        const statusLogs = matchErrMsg(result[0], openAPIServerErrMsg, []);
        const notiLogs = matchErrMsg(result[1], openAPIServerErrMsg, []);

        const tmpAccLogList = [];
        if (notiLogs.length === 0) {
            statusLogs.forEach(log => {
                log.msg = "월패드에서 디바이스 상태 변경에 대한 report 정보를 보내지 않음. 확인 필요.";
                log.resTime = null;
                log.tag = "W";
                tmpAccLogList.push({...log});
            });
        } else {
            statusLogs.forEach(sLog => {
                let count = 1;
                notiLogs.forEach(nLog => {
                    if (sLog.commandId === nLog.commandId) {
                        const time = moment(nLog.resTime).diff(moment(sLog.reqTime), 'milliseconds');
                        if (time > 10000) {
                            tmpAccLogList.push({
                                reqTime: sLog.reqTime,
                                resTime: nLog.resTime,
                                responseCode: nLog.responseCode,
                                errorCode: nLog.errorCode,
                                commandId: nLog.commandId,
                                msg: "타임 아웃으로 인한 제어 실패",
                                tag: "wallpad"
                            })
                        } else {
                            tmpAccLogList.push({
                                reqTime: sLog.reqTime,
                                resTime: nLog.resTime,
                                responseCode: nLog.responseCode,
                                errorCode: nLog.errorCode,
                                commandId: nLog.commandId,
                                msg: `(Noti 응답)${nLog.msg}`,
                                tag: nLog.tag
                            })
                        }
                        return;
                    } else {
                        if (count === notiLogs.length) {
                            sLog.msg = "월패드에서 디바이스 상태 변경에 대한 report 정보를 보내지 않음. 확인 필요.";
                            sLog.resTime = null;
                            sLog.tag = 'walpad';
                            tmpAccLogList.push({...sLog});
                        }
                    }
                    count++;
                })
            })
        }
        setAccControlLogList([...tmpAccLogList]);

        const commandLogs = matchErrMsg(result[2], commandErrMsg, []);
        const reportLogs = matchErrMsg(result[3], reportErrMsg, []);

        const tmpCommandLogList = [];
        if (reportLogs.length === 0) {
            commandLogs.forEach(cLog => {
                cLog.msg = "월패드에서 디바이스 상태 변경에 대한 report 정보를 보내지 않음. 확인 필요.";
                cLog.resTime = null;
                cLog.tag = 'wallpad';
                tmpCommandLogList.push(cLog);
            })
        } else {
            commandLogs.forEach(cLog => {
                let count = 1;
                reportLogs.forEach(rLog => {
                    if (rLog.commandId === cLog.commandId) {
                        const time = moment(rLog.resTime).diff(moment(cLog.reqTime), 'milliseconds');
                        if (time > 10000) {
                            tmpCommandLogList.push({
                                reqTime: cLog.reqTime,
                                resTime: rLog.resTime,
                                responseCode: rLog.responseCode,
                                errorCode: rLog.errorCode,
                                commandId: rLog.commandId,
                                msg: "타임아웃으로 인한 제어 실패",
                                tag: 'wallpad'
                            })
                        } else {
                            tmpCommandLogList.push({
                                reqTime: cLog.reqTime,
                                resTime: rLog.resTime,
                                responseCode: rLog.responseCode,
                                errorCode: rLog.errorCode,
                                commandId: rLog.commandId,
                                msg: `(리포트 응답)${rLog.msg}`,
                                tag: rLog.tag
                            })
                        }
                        return;
                    } else {
                        if (count === reportLogs.length) {
                            cLog.msg = "월패드에서 디바이스 상태 변경에 대한 report 정보를 보내지 않음. 확인 필요.";
                            cLog.resTime = null;
                            cLog.tag = 'wallpad';
                            tmpCommandLogList.push({...cLog});
                        }
                    }
                    count++;
                })
            })
        }
        setCommandLogList([...tmpCommandLogList]);

        setLogLoading(false);
    }


    const items = [
        {
            label: "홈 목록",
            key: '1',
            children:
                <Table size={"small"}
                       columns={homeListColumns(getSubDevices)}
                       dataSource={homeList}
                       loading={loading}/>
        },
        {
            label: "제어 히스토리",
            key: '2',
            children:
                <Table size={"small"}
                       columns={commandHistoryColumns}
                       dataSource={homeCommandList}
                       loading={loading}/>
        }
    ]

    const subItems = [
        {
            label: "악세사리 제어 히스토리",
            key: '',
            children:
                <Table size={"small"}
                       columns={logColumns()}
                       dataSource={accControlLogList}
                       loading={logLoading}/>
        },
        {
            label: "커맨드 실행 히스토리",
            key: '2',
            children:
                <Table size={"small"}
                       columns={logColumns()}
                       dataSource={commandLogList}
                       loading={logLoading}/>
        }
    ]

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[KT Apps 등록 기기] 제어 상태 조회</div>
            <Space direction={"horizontal"} align={"start"}>
                <SearchBar userIdRequired={true}
                           dateRangeRequired={true}
                           setUserId={onChangeUserId}
                           setDateRange={onChangeDateRange}
                           search={search}/>
            </Space>
            <div style={{maxWidth: '45vw', minHeight: 460}}>
                <Tabs defaultActiveKey={'1'} items={items}/>
            </div>

            <div className={`sub-content`} style={{maxWidth: "65vw"}}>
                <Divider orientation={'left'}>
                    디바이스 목록
                </Divider>
                <div style={{maxWidth: '65vw'}}>
                    <Table size={"small"}
                           columns={accessoryColumns(getAccLogs)}
                           dataSource={subDeviceList}
                           loading={subDeviceLoading}/>
                    <Tabs defaultActiveKey={'1'} items={subItems}/>
                </div>
            </div>
        </div>
    )
}

export default withCredentials(KTAppControl);