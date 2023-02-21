import React, {useState} from 'react';
import {Button, Table} from "antd";
import columns from '../../../../constant/columns/log.columns';
import {getLogsUserReg} from "../../../../api/user";
import {matchErrMsg} from "../../../../utils";
import errorMessages from "../../../../constant/error.messages";
import {CommentTargets} from "../../../CommentTargets";

const UserRegTab = (props) => {

    const registerErrMsg = errorMessages.WallpadSignupErrCode.register;
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);
        setLogs([]);

        const closure = {
            ...props.closure
        }
        const result = await getLogsUserReg(closure);
        if (result[0].logs.length !== 0) {
            const matches = matchErrMsg(result[0], registerErrMsg, []);
            setLogs([...logs, matches]);
        } else {
            const matches = matchErrMsg(result[1], registerErrMsg, []);
            setLogs([...logs, matches]);
        }

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

export default UserRegTab;