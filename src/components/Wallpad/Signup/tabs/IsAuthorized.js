import React, {useState} from 'react';
import {Button, Table} from "antd";
import columns from '../../../../constant/columns/log.columns';
import {matchErrMsg} from "../../../../utils";
import {getLogsUserAuth} from "../../../../api/user";
import errorMessages from "../../../../constant/error.messages";
import {CommentTargets} from "../../../CommentTargets";

const IsAuthorized = (props) => {

    const registerErrMsg = errorMessages.WallpadSignupErrCode.register;
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);
        setLogs([]);

        const closure = {
            ...props.closure
        }
        const result = await getLogsUserAuth(closure);

        const list = matchErrMsg(result[0], registerErrMsg, []);
        setLogs([...logs, list]);

        setLoading(false);
    }

    return (
        <div style={{maxWidth: '95vw'}}>
            <div align={"right"}>
                <CommentTargets/>
            </div>
            <Button type={"primary"}
                    onClick={searchLog}>
                로그 조회
            </Button>
            <Table size={"small"}
                   columns={columns()}
                   dataSource={logs}
                   loading={loading}/>
        </div>
    )
}

export default IsAuthorized;