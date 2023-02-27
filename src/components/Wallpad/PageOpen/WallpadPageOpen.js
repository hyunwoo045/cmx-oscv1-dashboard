import React, {useState} from 'react';
import {Divider, Space, Table} from "antd";
import {getCountryLogs} from "../../../api/log"
import {logParser} from "../../../utils";
import columns from "../../../constant/columns/log.columns";
import {SearchBar} from "../../SearchBar";
import {withCredentials} from "../../../hocs";

const WallpadPageOpen = () => {

    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        modelName: "",
        startDate: "",
        endDate: "",
    })
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);

        const closure = {...inputs};
        if (closure.modelName.length === 0) {
            alert("모델명은 필수 입력 항목입니다.");
            return;
        }
        const response = await getCountryLogs(closure);
        const list = logParser(response, "wallpad");
        setLogs([...list]);

        setLoading(false);
    }

    const onSelectModel = async (value, option) => setInputs({...inputs, modelName: value});

    const onDateChange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[월패드 로그인 관련 에러 조회]</div>
            <Space direction={"horizontal"} align={"start"}>
                <SearchBar modelNameRequired={true}
                           dateRangeRequired={true}
                           setModelName={onSelectModel}
                           setDateRange={onDateChange}
                           search={searchLog}/>
            </Space>
            <div style={{marginBottom: 50}}/>
            <div style={{maxWidth: '70vw'}}>
                <Divider orientation={'left'}>국가 코드 조회 로그</Divider>
                <Table size='small'
                       columns={columns()}
                       dataSource={logs}
                       loading={loading}/>
            </div>
        </div>
    )
}

export default withCredentials(WallpadPageOpen);