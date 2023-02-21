import React, {useState} from 'react';
import {CommentTargets} from "../../../CommentTargets";
import {Button, Table} from "antd";
import columns from "../../../../constant/columns/log.columns";
import {getLogsOauth} from "../../../../api/user";
import {matchErrMsg} from "../../../../utils";
import errorMessages from "../../../../constant/error.messages";

const AuthLogs = (props) => {

    const authErrMsg = errorMessages.HomeIOTLoginPageErrCode.authorize;
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const search = async () => {
        setLoading(true)
        setLogs([]);

        const closure = {...props.inputs};

        const loginQueryResponse = await getLogsOauth(closure);
        const logs = matchErrMsg(loginQueryResponse[0], authErrMsg, []);
        setLogs([...logs, logs]);

        setLoading(false);
    }

    return (
        <div style={{width: "75vw"}}>
            <div align={"right"}>
                <CommentTargets/>
            </div>
            <Button type={"primary"}
                    onClick={search}>
                로그 조회
            </Button>
            <Table columns={columns()}
                   dataSource={logs}
                   loading={loading}/>
        </div>
    )
}

export default AuthLogs;