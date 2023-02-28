import React, {useState} from 'react';
import {SearchBar} from "../../SearchBar";
import {Divider, Space, Table, Tabs} from "antd";
import homeListColumns from "../../../constant/columns/homeList.columns";
import accessoryColumns from '../../../constant/columns/accessory.columns';
import accessoryCommandColumns from "../../../constant/columns/accessory.command.columns";
import commandColumns from "../../../constant/columns/command.columns";
import {getKTDeviceList, getKTHomeList, KTCommandLog} from "../../../api/accessory";
import {withCredentials} from "../../../hocs";
import {thirdPartyCommand} from "../../../api/resource";

const KTAppControl = () => {

    const [loading, setLoading] = useState(false);
    const [subDeviceLoading, setSubDeviceLoading] = useState(false);
    const [logLoading, setLogLoading] = useState(false);
    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: "",
    });
    const [homeList, setHomeList] = useState([]);
    const [subDeviceList, setSubDeviceList] = useState([]);
    const [accControlLogList, setAccControlLogList] = useState([])
    const [commandLogList, setCommandLogList] = useState([]);

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});
    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    const search = async () => {
        setLoading(true);

        const closure = {...inputs, inputDate: inputs.endDate};

        const result = await getKTHomeList(closure);
        setHomeList([...result]);

        setLoading(false);
    }

    const getSubDevices = async (homeId) => {
        setSubDeviceLoading(true);

        const closure = {...inputs, inputDate: inputs.endDate, homeSeq: homeId};

        const accessories = await getKTDeviceList(closure);
        if (accessories === null) return;

        // TODO. 이건 무슨 코드일까..?
        // const devices = await getSubDevice(closure.userId);
        // if (devices === null) return;
        // devices.forEach(device => {
        //     device.subDevices.forEach(subDevice => {
        //         list.push({
        //             ...subDevice,
        //             rootUuid: device.rootUuid,
        //             nickname: device.nickname
        //         })
        //     })
        // })

        setSubDeviceList([...accessories]);
        setSubDeviceLoading(false);
    }

    const getAccLogs = async (accId) => {
        setLogLoading(true);

        const closure = {...inputs, accessoryId: accId};
        const result = await KTCommandLog(closure);
        const result_ = await thirdPartyCommand(closure);

        setAccControlLogList([...result]);
        setCommandLogList([...result_]);

        setLogLoading(false);
    }

    const subItems = [
        {
            label: "악세사리 제어 히스토리",
            key: '',
            children:
                <>
                    <Table size={"small"}
                           columns={accessoryCommandColumns}
                           dataSource={accControlLogList}
                           loading={logLoading}/>
                </>
        },
        {
            label: "커맨드 실행 히스토리",
            key: '2',
            children:
                <Table size={"small"}
                       columns={commandColumns}
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
            <div style={{maxWidth: '55vw', minHeight: 460}}>
                <Divider orientation={'left'}>홈 목록</Divider>
                <Table size={"small"}
                       columns={homeListColumns(getSubDevices)}
                       dataSource={homeList}
                       loading={loading}/>
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