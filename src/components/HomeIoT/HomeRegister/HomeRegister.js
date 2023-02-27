import {Space, Table} from "antd";
import {SearchBar} from "../../SearchBar";
import {useState} from "react";
import {wallpadRegisterLog} from "../../../api/log";
import {logParser} from "../../../utils";
import columns from '../../../constant/columns/log.columns';
import {withCredentials} from "../../../hocs";

const HomeRegister = () => {

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

        const response = await wallpadRegisterLog(closure);
        const list = logParser(response, "mobile");
        setLogs([...list])

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
                               setDateRange={onChangeDateRange}
                               search={searchLog}/>
                </Space>
                <div align={"right"}>
                    <div style={{minWidth: '75vw', marginTop: 50}}></div>
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

export default withCredentials(HomeRegister);