import React, {useState} from 'react';
import {Divider, Space, Table} from "antd";
import {SearchBar} from "../../SearchBar";
import deviceColumn from '../../../constant/columns/device.columns';
import commandColumns from "../../../constant/columns/command.columns";
import {getSubDevice} from "../../../api/resource";
import moment from "moment/moment";
import {commandLog, initLog} from "../../../api/log";
import {withCredentials} from "../../../hocs";

const HomeControl = () => {

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

        const closure = {
            rootUuid,
            subUuid,
            gatewayNo: resourceNo,
            startDate: moment().subtract(7, 'day').format('YYYY-MM-DDTHH:mm:ss'),
            endDate: moment().format('YYYY-MM-DDTHH:mm:ss')
        }

        const result = await commandLog(closure);
        for (const row of result) {
            if (row.reportAt === null) {
                row.tag = 'wallpad';
                row.message = '제어 요청에 대한 Report 가 확인되지 않습니다.';
            }
        }
        setDeviceLogs([...result])

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
                    <div style={{maxWidth: '65vw'}}>
                        <Table columns={commandColumns}
                               dataSource={deviceLogs}
                               loading={loading}/>
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default withCredentials(HomeControl);