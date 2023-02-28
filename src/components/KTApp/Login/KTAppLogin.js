import {Button, Descriptions, Divider, Space, Table, Tabs} from "antd";
import {SearchBar} from "../../SearchBar";
import {useState} from "react";
import {KTLoginLog} from "../../../api/log";
import {logParser} from "../../../utils";
import columns from '../../../constant/columns/log.columns';
import {getUserResourceInfo} from "../../../api/user";
import {withCredentials} from "../../../hocs";

const KTAppLogin = () => {

    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: ""
    })
    const [userInfo, setUserInfo] = useState({
        user_no: "",
        user_nm: "",
        nickname: "",
        mobile_seqno: "",
    })
    const [resourceInfo, setResourceInfo] = useState({
        resource_no: "",
        center_cd: "",
        center_ip: "",
        country_cd: "",
        dong: "",
        ho: "",
        district_cd: ""
    });
    const [logs, setLogs] = useState([]);

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});

    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    const search = async () => {
        const closure = {...inputs};

        if (closure.userId.length === 0) {
            alert("유저 아이디는 필수 입력 항목입니다.");
            return;
        }

        const result = await getUserResourceInfo(closure.userId);
        setUserInfo({...userInfo, ...result.user});
        setResourceInfo({...resourceInfo, ...result.wallpad});
    }

    const searchLog = async () => {
        setLoading(true);

        const closure = {...inputs}
        if (closure.userId.length === 0) {
            alert("유저 아이디는 필수 입력 항목입니다.");
            return;
        } else if (closure.startDate.length === 0 || closure.endDate.length === 0) {
            alert("날짜가 정상적으로 입력되지 않았습니다.");
            return;
        }

        const response = await KTLoginLog(closure);
        const list = logParser(response, "cloud");
        setLogs([...list]);

        setLoading(false);
    }

    const items = [
        {
            label: "사용자 정보",
            key: '1',
            children:
                <Descriptions size={"small"}>
                    <Descriptions.Item label={'사용자 고유번호'}
                                       span={3} children={1}>
                        {userInfo.user_no}
                    </Descriptions.Item>
                    <Descriptions.Item label={'사용자 이름'}
                                       span={3} children={1}>
                        {userInfo.user_nm}
                    </Descriptions.Item>
                </Descriptions>
        },
        {
            label: "월패드 정보",
            key: '2',
            children:
                <Descriptions size={'small'}>
                    <Descriptions.Item label={"월패드 넘버"} children={1} span={3}>
                        {resourceInfo.resource_no}
                    </Descriptions.Item>
                    <Descriptions.Item label={"사이트 코드"} children={2} span={3}>
                        {resourceInfo.center_cd}
                    </Descriptions.Item>
                    <Descriptions.Item label={"서버 IP"} children={3} span={3}>
                        {resourceInfo.center_ip}
                    </Descriptions.Item>
                    <Descriptions.Item label={"국가 코드"} children={4} span={3}>
                        {resourceInfo.country_cd}
                    </Descriptions.Item>
                    <Descriptions.Item label={"동/호"} children={5} span={3}>
                        {resourceInfo.dong}동 {resourceInfo.ho}호
                    </Descriptions.Item>
                    <Descriptions.Item label={"서브 사이트 코드"} children={6} span={3}>
                        {resourceInfo.district_cd}
                    </Descriptions.Item>
                </Descriptions>
        }
    ]

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[KT App 로그인] 관련 에러 조회</div>
            <Space direction={"horizontal"} align={"start"}>
                <SearchBar userIdRequired={true}
                           dateRangeRequired={true}
                           setUserId={onChangeUserId}
                           setDateRange={onChangeDateRange}
                           search={search}/>
            </Space>
            <div style={{minHeight: 480, maxWidth: '35vw'}}>
                <Tabs defaultActiveKey={'1'} items={items}/>
            </div>
            <div style={{maxWidth: '75vw'}}>
                <Divider>로그인 이력</Divider>
                <Button type={"primary"}
                        onClick={searchLog}>
                    로그 조회
                </Button>
                <Table columns={columns()}
                       dataSource={logs}
                       loading={loading}/>
            </div>
        </div>
    )
}

export default withCredentials(KTAppLogin);