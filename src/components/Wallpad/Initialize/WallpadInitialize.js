import React, {useEffect, useState} from 'react';
import {Modal, Space, Table, Tabs} from "antd";
import {initLog} from "../../../api/log";
import moment from "moment";
import {initializeUser, initStatusLog} from "../../../api/user";
import {getSubDevice} from "../../../api/resource";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {SearchBar} from "../../SearchBar";
import UserInfo from "./tabs/UserInfo";
import deviceColumns from "../../../constant/columns/device.columns";
import {withCredentials} from "../../../hocs";

const WallpadInitialize = (props) => {
    useEffect(() => {
        const role = props.role;
        if (role === 'admin') {
            setButtonStatus(false);
        }
    }, [props.role])

    const [loading, setLoading] = useState(false);
    const [userStatus, setUserStatus] = useState("");
    const [buttonStatus, setButtonStatus] = useState(true);
    const [deviceList, setDeviceList] = useState([]);

    const [inputs, setInputs] = useState({
        userId: "",
    })
    const [userInfo, setUserInfo] = useState({
        member_no: "",
        resource_no: "",
        member_nm: "",
        center_cd: "",
        center_ip: "",
        dong: "",
        ho: "",
        model_nm: "",
        register_dt: "",
        update_dt: ""
    })

    const onChangeUserId = (value) => setInputs({...inputs, userId: value});
    const search = async () => {
        setLoading(true);
        setDeviceList([]);

        const closure = {
            ...inputs
        }

        const init = await initLog(closure.userId);
        const obj = {
            member_no: init.member_no,
            resource_no: init.resource_no,
            member_nm: init.member_nm,
            center_cd: init.center_cd,
            center_ip: init.center_ip,
            dong: init.dong + "동",
            ho: init.ho + "호",
            model_nm: init.center_nm,
            register_dt: moment(init.register_dt).format("YYYY-MM-DD HH:mm:ss"),
            update_dt: moment(init.update_dt).format("YYYY-MM-DD HH:mm:ss"),
        }
        setUserInfo({...userInfo, ...obj});

        const {userDeleted, tokenDeleted} = await initStatusLog(closure.userId, obj.member_no);
        if (!userDeleted && !tokenDeleted) {
            setUserStatus("초기화 안됨");
        } else {
            setUserStatus("사용자 정보 없음");
        }

        const list = []
        const devices = await getSubDevice(closure.userId);
        devices.forEach(device => {
            device.subDevices.forEach(subDevice => {
                list.push({
                    ...subDevice,
                    rootUuid: device.rootUuid,
                    nickname: device.nickname
                });
            })
        })
        setDeviceList(list);
        setLoading(false);
    }

    const deleteUser = async () => {
        const closure = {...inputs};
        await initializeUser(closure);
    }

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: (<>해당 유저 삭제 시 계정은 영구 삭제됩니다.<br/>다음 사용자를 초기화 하시겠습니까?<br/>(월패드 계정 초기화 확인 필수)<br/></>),
            icon: <ExclamationCircleOutlined/>,
            content: `${inputs.userId}`,
            okText: '취소',
            cancelText: '확인',
            onCancel() {
                deleteUser().then(r => {
                    alert("유저 초기화가 완료되었습니다.");
                    window.location.reload();
                })
            }
        })
    }

    const items = [
        {
            label: "사용자 정보",
            key: "1",
            children: <UserInfo userInfo={userInfo}
                                userStatus={userStatus}
                                showDeleteConfirm={showDeleteConfirm}
                                buttonStatus={buttonStatus}/>
        },
        {
            label: "디바이스 목록",
            key: "2",
            children: <div style={{width: '75vw'}}>
                <Table size={"small"}
                       columns={deviceColumns(() => {})}
                       dataSource={deviceList}
                       loading={loading}/>
            </div>
        }
    ]

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>월패드 계정 초기화 및 월패드 정보</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"} align={"start"}>
                    <SearchBar userIdRequired={true}
                               setUserId={onChangeUserId}
                               search={search}/>
                </Space>
                <Space direction={"horizontal"} align={"start"} style={{minHeight: 580}}>
                    <Space direction={"vertical"} align={"start"}>
                        <Tabs defaultActiveKey={'1'} items={items}/>
                    </Space>
                </Space>
            </Space>
        </div>
    )
}

export default withCredentials(WallpadInitialize);