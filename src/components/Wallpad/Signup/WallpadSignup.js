import React, {useState} from 'react';
import {Descriptions, Tabs} from "antd";
import {SearchBar} from "../../SearchBar";
import UserRegTab from "./tabs/UserRegTab";
import IsAuthorized from "./tabs/IsAuthorized";
import {checkRegistration} from "../../../api/user";
import {withCredentials} from "../../../hocs";

const WallpadSignup = () => {

    const [inputs, setInputs] = useState({
        userId: "",
        modelName: "",
        startDate: "",
        endDate: "",
    })
    const [userIsValid, setUserValid] = useState("");
    const [resourceIsValid, setResourceValid] = useState("");

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});

    const onChangeModelName = (value) => setInputs({...inputs, modelName: value});

    const onChangeDateRange = ([startDate, endDate]) => setInputs({...inputs, startDate, endDate});

    const search = async () => {
        const closure = {userId: inputs.userId};

        const response = await checkRegistration(closure.userId);
        const {userValid, resourceValid} = response;

        setUserValid(userValid ? "정상 등록" : "미 등록");
        setResourceValid(resourceValid ? "정상 등록" : "미 등록");
    }

    const items = [
        {
            label: "사용자 등록 로그 조회",
            key: '1',
            children: <UserRegTab closure={inputs}/>
        },
        {
            label: "인증 및 연동 로그 조회",
            key: '2',
            children: <IsAuthorized closure={inputs}/>
        }
    ]

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>[월패드 계정등록] 관련 에러 조회</div>
            <SearchBar userIdRequired={true}
                       modelNameRequired={true}
                       dateRangeRequired={true}
                       setUserId={onChangeUserId}
                       setModelName={onChangeModelName}
                       setDateRange={onChangeDateRange}
                       search={search}/>
            <Descriptions>
                <Descriptions.Item label={"사용자 등록여부"} span={3}>
                    {userIsValid}
                </Descriptions.Item>
                <Descriptions.Item label={"월패드 등록여부"} span={3}>
                    {resourceIsValid}
                </Descriptions.Item>
            </Descriptions>

            <div style={{maxWidth: '100vw', marginTop: 80}}>
                <Tabs defaultActiveKey={'1'} items={items}/>
            </div>
        </div>

    )
}

export default withCredentials(WallpadSignup);