import {Space, Table} from "antd";
import {SearchBar} from "../../SearchBar";
import {useState} from "react";
import {wallpadRegisterLog} from "../../../api/log";
import {matchErrMsg} from "../../../utils";
import errorMessages from "../../../constant/error.messages";
import {CommentTargets} from "../../CommentTargets";
import columns from '../../../constant/columns/log.columns';

const HomeRegister = () => {

    const gatewayErrMsg = errorMessages.HomeIOTResisterErrCode.gateways;
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: ""
    })
    const [logs, setLogs] = useState([]);

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});
    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});
    const searchLog = async () => {
        setLoading(true);

        const closure = {
            ...inputs
        }

        if (closure.userId.length === 0) {
            alert("유저 아이디는 필수 입력 항목입니다.");
            return;
        } else if (closure.startDate.length === 0 || closure.endDate.length === 0) {
            alert("날짜가 정상적으로 입력되지 않았습니다.");
            return;
        }

        const body = {
            keywords: {...closure}
        }
        const response = await wallpadRegisterLog(body);
        const responseLogs = matchErrMsg(response[0], gatewayErrMsg, [])
        setLogs({...logs, ...responseLogs})

        setLoading(false);
    }

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[Home IoT 기기 등록] 관련 에러 조회</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"}>
                    <SearchBar userIdRequired={true}
                               dateRangeRequired={true}
                               setUserId={onChangeUserId}
                               setDataRange={onChangeDateRange}
                               search={searchLog}/>
                </Space>
                <div align={"right"}>
                    <div style={{minWidth: '75vw'}}></div>
                    <Space direction={"horizontal"} align={"start"}>
                        <CommentTargets/>
                    </Space>
                </div>
                <div style={{width: "75vw"}}>
                    <Table columns={columns()}
                           dataSource={logs}
                           loading={loading}/>
                </div>
            </Space>
        </div>
    )
}

export default HomeRegister;