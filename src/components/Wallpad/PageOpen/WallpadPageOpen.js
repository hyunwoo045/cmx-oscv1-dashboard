import React, {useState} from 'react';
import {Space, Table} from "antd";
import {wallpadLoginLog} from "../../../api/log"
import {matchErrMsg} from "../../../utils";
import errorMessages from "../../../constant/error.messages.js";
import {CommentTargets} from "../../CommentTargets";
import columns from "../../../constant/columns/log.columns";
import {SearchBar} from "../../SearchBar";
import {withCredentials} from "../../../hocs";

const WallpadPageOpen = () => {

    const loginPlainErrMsg = errorMessages.WallpadPageOpenErrCode.countries;
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        modelName: "",
        startDate: "",
        endDate: "",
    })
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);
        setLogs([]);

        const closure = {
            keywords: {...inputs}
        }

        if (closure.keywords.modelName.length === 0) {
            alert("모델명은 필수 입력 항목입니다.");
            return;
        }


        const response = await wallpadLoginLog(closure);
        if (response.success) {
            const list = matchErrMsg(response.result[0], loginPlainErrMsg, []);
            setLogs([...logs, list]);
        } else {
            setLogs([]);
        }

        setLoading(false);
    }

    const onSelectModel = async (value, option) => setInputs({...inputs, modelName: value});

    const onDateChange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[월패드 로그인 관련 에러 조회]</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"} align={"start"}>
                    <SearchBar modelNameRequired={true}
                               dateRangeRequired={true}
                               setModelName={onSelectModel}
                               setDateRange={onDateChange}
                               search={searchLog}/>
                </Space>
                <div style={{minWidth: '70vw'}} align={"right"}>
                    <CommentTargets/>
                </div>
                <div style={{maxWidth: '70vw'}}>
                    <Table size='small'
                           columns={columns()}
                           dataSource={logs}
                           loading={loading}/>
                </div>
            </Space>
        </div>
    )
}

export default withCredentials(WallpadPageOpen);