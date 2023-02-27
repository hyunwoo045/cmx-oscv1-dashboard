import {Button, Table} from "antd";
import columns from "../../../../constant/columns/log.columns";
import {useState} from "react";
import {getGatewaysLog} from "../../../../api/resource";
import {logParser} from "../../../../utils";


const Gateways = (props) => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const search = async () => {
        setLoading(true);
        setLogs([]);

        const closure = {...props.inputs};
        const result = await getGatewaysLog(closure);
        const list = logParser(result, "mobile");
        setLogs([...list]);

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

export default Gateways;