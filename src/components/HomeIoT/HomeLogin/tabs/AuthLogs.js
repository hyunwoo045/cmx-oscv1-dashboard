import React, {useState} from 'react';
import {Button, Table} from "antd";
import columns from "../../../../constant/columns/log.columns";
import {getLogsOauth} from "../../../../api/user";
import {logParser} from "../../../../utils";

const AuthLogs = (props) => {

    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const search = async () => {
        setLoading(true)

        const closure = {...props.inputs};
        const response = await getLogsOauth(closure);
        const logs = logParser(response, "mobile");
        setLogs([...logs]);

        setLoading(false);
    }

    return (
        <div style={{width: "75vw"}}>
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