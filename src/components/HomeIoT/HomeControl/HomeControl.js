import React, {useState} from 'react';
import errorMessages from "../../../constant/error.messages";
import {Divider, Space, Table} from "antd";
import {SearchBar} from "../../SearchBar";
import deviceColumn from '../../../constant/columns/device.columns';
import columns from '../../../constant/columns/log.columns';
import {getSubDevice} from "../../../api/resource";
import {CommentTargets} from "../../CommentTargets";
import moment from "moment/moment";
import {commandLog, initLog} from "../../../api/log";
import {matchErrMsg} from "../../../utils";
import {withCredentials} from "../../../hocs";

const HomeControl = () => {

    const commandErrMsg = errorMessages.HomeIOTControlErrCode.command;
    const reportErrMsg = errorMessages.HomeIOTControlErrCode.report;

    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: ""
    })
    const [resourceNo, setResourceNo] = useState([]);
    const [deviceList, setDeviceList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deviceLogs, setDeviceLogs] = useState([]);

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});

    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate})

    const searchSubDevice = async () => {
        setLoading(true);

        const closure = {...inputs};
        if (closure.userId.length === 0) {
            alert("유저 아이디는 필수 입력 항목입니다.");
            return;
        } else if (closure.startDate.length === 0 || closure.endDate.length === 0) {
            alert("날짜가 정상적으로 입력되지 않았습니다.");
            return;
        }

        const init = await initLog(closure.userId);
        setResourceNo(init.resource_no);

        const list = [];
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
        setDeviceList([...list]);
        setLoading(false);
    }

    const deviceDetail = async (nickname, rootUuid, subUuid) => {
        setLoading(true);
        setDeviceLogs([]);
        const closure = {
            keywords: {
                rootUuid,
                subUuid,
                gatewayNo: resourceNo,
                startDate: moment().subtract(7, 'day').format('YYYY-MM-DDTHH:mm:ss'),
                endDate: moment().format('YYYY-MM-DDTHH:mm:ss')
            }
        }
        const result = await commandLog(closure);

        const commandLogs = matchErrMsg(result[0], commandErrMsg, []);
        const reportLogs = matchErrMsg(result[1], reportErrMsg, []);
        const tmpDeviceLogs = [];

        if (reportLogs.length === 0) {
            commandLogs.forEach(cLog => {
                cLog.msg = "월패드에서 디바이스 상태 변경에 대한 report 를 보내지 않음. 확인 필요.";
                cLog.resTime = null;
                cLog.tag = 'wallpad';
                tmpDeviceLogs.push({...cLog});
            });
        } else {
            commandLogs.forEach(cLog => {
                let count = 1;
                reportLogs.forEach(rLog => {
                    if (rLog.commandId === cLog.commandId) {
                        const time = moment(rLog.resTime).diff(moment(cLog.reqTime), 'milliseconds');
                        if (time > 10000) {
                            tmpDeviceLogs.push({
                                reqTime: cLog.reqTime,
                                resTime: rLog.resTime,
                                responseCode: rLog.responseCode,
                                errorCode: rLog.errorCode,
                                commandId: rLog.commandId,
                                msg: "타임 아웃",
                                tag: 'wallpad'
                            });
                        } else {
                            tmpDeviceLogs.push({
                                reqTime: cLog.reqTime,
                                resTime: rLog.resTime,
                                responseCode: rLog.responseCode,
                                errorCode: rLog.errorCode,
                                commandId: rLog.commandId,
                                msg: `(리포트)${rLog.msg}`,
                                tag: rLog.tag
                            });
                        }
                        return false;
                    } else {
                        if (count === reportLogs.length) {
                            cLog.msg = "월패드에서 디바이스 상태 변경에 대한 report 를 보내지 않음. 확인 필요";
                            cLog.resTime = null;
                            cLog.tag = 'wallpad';
                            tmpDeviceLogs.push({...cLog})
                        }
                    }
                    count++;
                })
            })
        }

        setDeviceLogs([...tmpDeviceLogs]);
        setLoading(false);
    }

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[Home IoT 월패드에 등록된 기기 정보] 상태 조회</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"}>
                    <SearchBar userIdRequired={true}
                               dateRangeRequired={true}
                               setUserId={onChangeUserId}
                               setDateRange={onChangeDateRange}
                               search={searchSubDevice}/>
                </Space>
                <div style={{minHeight: 450}}>
                    <Divider>디바이스 목록</Divider>
                    <div style={{width: '65vw'}}>
                        <Table columns={deviceColumn(deviceDetail)}
                               dataSource={deviceList}
                               loading={loading}/>
                    </div>
                </div>

                <div>
                    <Divider>최근 일주일 리포트</Divider>
                    <div align={"right"}>
                        <div style={{width: '65vw'}}></div>
                        <CommentTargets/>
                    </div>
                    <div style={{maxWidth: '65vw'}}>
                        <Table columns={columns()}
                               dataSource={deviceLogs}
                               loading={loading}/>
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default withCredentials(HomeControl);