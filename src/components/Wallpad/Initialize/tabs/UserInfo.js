import React from 'react';
import {Button, Descriptions} from "antd";

const UserInfo = (props) => {
    return (
        <div style={{maxWidth: "75vw"}}>
            <Descriptions bordered size={"small"}>
                <Descriptions.Item label="유저번호"
                                   span={3}>{props.userInfo.member_no}</Descriptions.Item>
                <Descriptions.Item label="기기번호"
                                   span={3}>{props.userInfo.resource_no}</Descriptions.Item>
                <Descriptions.Item label="유저명"
                                   span={3}>{props.userInfo.member_nm}</Descriptions.Item>
                <Descriptions.Item label="센터코드"
                                   span={3}>{props.userInfo.center_cd}</Descriptions.Item>
                <Descriptions.Item label="센터IP"
                                   span={3}>{props.userInfo.center_ip}</Descriptions.Item>
                <Descriptions.Item label="동/호"
                                   span={3}>{props.userInfo.dong} {props.userInfo.ho}</Descriptions.Item>
                <Descriptions.Item label="모델명"
                                   span={3}>{props.userInfo.model_nm}</Descriptions.Item>
                <Descriptions.Item label="등록날짜"
                                   span={3}>{props.userInfo.register_dt}</Descriptions.Item>
                <Descriptions.Item label="갱신날짜"
                                   span={3}>{props.userInfo.update_dt}</Descriptions.Item>
                <Descriptions.Item label={"초기화 상태 검증"}
                                   span={3}>
                    {props.userStatus}
                </Descriptions.Item>
            </Descriptions>
            <span style={{color: 'red'}}>월패드 계정 초기화 후 클라우드 사용자 계정 초기화 해주세요.</span>
            <div>
                <Button type={"primary"}
                        onClick={props.showDeleteConfirm}
                        danger
                        disabled={props.buttonStatus}>
                    사용자 계정 초기화
                </Button>
            </div>
        </div>
    )
}

export default UserInfo;