import {Descriptions, Space, Tabs} from "antd";
import {SearchBar} from "../../SearchBar";
import {useState} from "react";
import {initLog} from "../../../api/log";
import {checkRegistration} from "../../../api/user";
import AuthLogs from "./tabs/AuthLogs";
import Gateways from "./tabs/Gateways";

const HomeLogin = () => {

    const [inputs, setInputs] = useState({
        userId: "",
        startDate: "",
        endDate: ""
    })
    const [isUserValid, setUserValid] = useState("");
    const [isResourceValid, setResourceValid] = useState("");
    const [userInfo, setUserInfo] = useState({
        member_no: "",
        resource_no: "",
        member_nm: "",
        center_cd: "",
        center_nm: "",
        center_ip: "",
        dong: "",
        ho: "",
        register_dt: "",
        update_dt: ""
    })
    const onChangeUserId = (value) => setInputs({...inputs, userId: value});

    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    const searchLogs = async () => {
        const closure = {
            userId: inputs.userId,
            startDate: inputs.startDate,
            endDate: inputs.endDate
        }

        if (closure.userId.length === 0) {
            alert("유저 아이디는 필수 입력 항목입니다.");
            return;
        } else if (closure.startDate.length === 0 || closure.endDate.length === 0) {
            alert("날짜가 정상적으로 입력되지 않았습니다.");
            return;
        }

        const result = await checkRegistration(closure.userId);
        setUserValid(result.userValid ? "정상 등록" : "미 등록");
        setResourceValid(result.resourceValid ? "정상 등록" : "미 등록");

        const initResult = await initLog(closure.userId);
        setUserInfo({...userInfo, ...initResult})
    }

    const items = [
        {
            label: "인증 및 연동 로그 조회",
            key: '1',
            children: <AuthLogs inputs={inputs}/>
        },
        {
            label: "게이트웨이 조회 로그 조회",
            key: '2',
            children: <Gateways inputs={inputs}/>
        }
    ]

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[Home IOT 로그인] 관련 에러 조회</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"}>
                    <SearchBar userIdRequired={true}
                               dateRangeRequired={true}
                               setUserId={onChangeUserId}
                               setDateRange={onChangeDateRange}
                               search={searchLogs}/>
                </Space>
                <Descriptions>
                    <Descriptions.Item label="사용자 및 모바일 등록 여부"
                                       span={3}>
                        {isUserValid}
                    </Descriptions.Item>
                    <Descriptions.Item label="월패드 등록여부"
                                       span={3}>
                        {isResourceValid}
                    </Descriptions.Item>
                </Descriptions>
                <Descriptions bordered
                              size={"small"}
                              ellipsis={true}>
                    <Descriptions.Item label="유저번호"
                                       span={3}>
                        {userInfo.member_no}
                    </Descriptions.Item>
                    <Descriptions.Item label="기기번호"
                                       span={3}>
                        {userInfo.resource_no}
                    </Descriptions.Item>
                    <Descriptions.Item label="유저명"
                                       span={3}>
                        {userInfo.member_nm}
                    </Descriptions.Item>
                    <Descriptions.Item label="센터코드"
                                       span={3}>
                        {userInfo.center_cd}
                    </Descriptions.Item>
                    <Descriptions.Item label="센터이름"
                                       span={3}>
                        {userInfo.center_nm}
                    </Descriptions.Item>
                    <Descriptions.Item label="센터IP"
                                       span={3}>
                        {userInfo.center_ip}
                    </Descriptions.Item>
                    <Descriptions.Item label="동/호"
                                       span={3}>
                        {userInfo.dong}동 {userInfo.ho}호
                    </Descriptions.Item>
                    <Descriptions.Item label="등록날짜"
                                       span={3}>
                        {userInfo.register_dt}
                    </Descriptions.Item>
                    <Descriptions.Item label="갱신날짜"
                                       span={3}>
                        {userInfo.update_dt}
                    </Descriptions.Item>
                </Descriptions>

                <Space direction={"vertical"} align={"start"}>
                    <div align={"right"}>
                        <div style={{minWidth: '75vw'}}></div>
                    </div>
                    <Tabs defaultActiveKey={'1'} items={items}/>
                </Space>
            </Space>
        </div>
    )
}

export default HomeLogin;