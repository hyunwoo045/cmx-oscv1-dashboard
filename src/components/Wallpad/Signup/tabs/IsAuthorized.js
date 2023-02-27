import React, {useState} from 'react';
import {Button, Table} from "antd";
import columns from '../../../../constant/columns/log.columns';
import {logParser} from "../../../../utils";
import {getLogsUserAuth} from "../../../../api/user";

const IsAuthorized = (props) => {

    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const searchLog = async () => {
        setLoading(true);
        const closure = {...props.closure}

        const result = await getLogsUserAuth(closure);
        const list = logParser(result, "wallpad");
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

export default IsAuthorized;