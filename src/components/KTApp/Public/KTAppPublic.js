import React, {useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Button, Descriptions, Space, Tabs} from "antd";
import {PageHeader} from "@ant-design/pro-layout";
import {SearchBar} from "../../SearchBar";
import Parking from "./Parking/Parking";

const KTAppPublic = () => {

    const [boolObj, setBoolObj] = useState([]);
    const [currentUserId, setCurrentUserId] = useState("");
    const [currentDate, setCurrentDate] = useState({
        startDate: "",
        endDate: "",
    });
    const [userInfo, setUserInfo] = useState({
        member_nm: "",
        use_flag: "",
        center_cd: "",
        center_nm: "",
        center_ip: "",
        dong: "",
        ho: "",
        register_dt: "",
        update_dt: ""
    })

    const items = [
        {
            label: "입출차",
            Service: "CAR",
            key: '0',
            children: <Parking/>,
            disabled: boolObj[0]
        },
        {
            label: "방문자",
            Service: "CAM",
            key: '1',
            children: <></>,
            disabled: boolObj[1]
        }

    ]

    const onChangeUserId = (value) => setCurrentUserId(value);

    const onChangeDateRange = (date) => setCurrentDate({...currentDate, ...date});

    const search = () => {

    }

    const onTabClick = () => {

    }

    const searchTab = () => {

    }

    return (
        <Content>
            <Space>
                <PageHeader title={"[KT Apps 등록 기기] 제어 상태 조회"}/>
            </Space>
            <div style={{padding: 20, minHeight: 804}}>
                <Space direction={"vertical"} align={"start"}>
                    <Space direction={"horizontal"} align={"start"}>
                        <div style={{fontSize: 15}}>등록 디바이스 조회</div>
                        <span style={{color: 'red'}}>입력 필수 항목</span>
                        <SearchBar userIdRequired={true}
                                   dateRangeRequired={true}
                                   setUserId={onChangeUserId}
                                   setDateRange={onChangeDateRange}
                                   onSearch={search}/>
                    </Space>
                    <div style={{minWidth: '85vw'}}>
                        <Descriptions bordered
                                      size={"small"}
                                      ellipsis={true}>
                            <Descriptions.Item label={"유저 이름"} span={3} children={1}>
                                {userInfo.member_nm}
                            </Descriptions.Item>
                            <Descriptions.Item label={"유효 상태"} span={3} children={2}>
                                {userInfo.use_flag}
                            </Descriptions.Item>
                            <Descriptions.Item label={"센터 코드"} span={3} children={3}>
                                {userInfo.center_cd}
                            </Descriptions.Item>
                            <Descriptions.Item label={"센터 이름"} span={3} children={4}>
                                {userInfo.center_nm}
                            </Descriptions.Item>
                            <Descriptions.Item label={"센터 IP"} span={3} children={5}>
                                {userInfo.center_ip}
                            </Descriptions.Item>
                            <Descriptions.Item label={"동/호"} span={3} children={6}>
                                {userInfo.dong}/{userInfo.ho}
                            </Descriptions.Item>
                            <Descriptions.Item label={"등록 날짜"} span={3} children={7}>
                                {userInfo.register_dt}
                            </Descriptions.Item>
                            <Descriptions.Item label={"갱신 날짜"} span={3} children={8}>
                                {userInfo.update_dt}
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <Space direction={"horizontal"} align={"start"}>
                        <Tabs defaultActiveKey={'9'}
                              items={items}
                              onTabClick={onTabClick}
                              tabBarExtraContent={{
                                  left: <div style={{margin: '10px'}}>
                                      <Button onClick={() => searchTab()}></Button>
                                  </div>
                              }}/>
                    </Space>
                </Space>
            </div>
        </Content>
    )
}

export default KTAppPublic;