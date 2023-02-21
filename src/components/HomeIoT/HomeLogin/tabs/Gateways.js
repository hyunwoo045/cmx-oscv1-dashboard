import {CommentTargets} from "../../../CommentTargets";
import {Button, Table} from "antd";
import columns from "../../../../constant/columns/log.columns";
import {useState} from "react";
import {getGatewaysLog} from "../../../../api/resource";
import {matchErrMsg} from "../../../../utils";
import errorMessages from "../../../../constant/error.messages";


const Gateways = (props) => {

    const gatewayErrMsg = errorMessages.HomeIOTLoginPageErrCode.gateways;
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const search = async () => {
        setLoading(true);
        setLogs([]);

        const closure = {...props.inputs};
        const result = await getGatewaysLog(closure);
        const gLogs = matchErrMsg(result[0], gatewayErrMsg, []);
        setLogs([...logs, gLogs]);

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

export default Gateways;