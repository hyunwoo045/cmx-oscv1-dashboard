import React, {useState} from 'react';
import {Button, Table} from "antd";
import columns from '../../../../constant/columns/log.columns';
import {getLogsUserReg} from "../../../../api/user";
import {logParser} from "../../../../utils";

const UserRegTab = (props) => {

    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);

        const closure = {...props.closure}
        const response = await getLogsUserReg(closure);
        const list = logParser(response);
        setLogs([...list]);

        setLoading(false);
    }

    return (
        <div style={{maxWidth: '95vw'}}>
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