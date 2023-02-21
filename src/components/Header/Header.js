import React from "react";
import {Avatar, Dropdown, Menu, Space} from "antd";
import './Header.scss';
import {UserOutlined} from "@ant-design/icons";
import {logout} from "../../api/admin";
import {ChangePwModal} from "../ChangePassword";
import {useNavigate} from "react-router-dom";

const CommonHeader = () => {

    const navigate = useNavigate();

    const onUserMenuClick = async (item) => {
        if (item.key === "logout") {
            await logout();
            navigate('/');
        } else if (item.key === "chpw") {
            ChangePwModal();
        }
    }

    const userMenu = (
        <Menu onClick={onUserMenuClick}
              theme="dark"
              items={[
                  {
                      key: 'chpw',
                      label: '비밀번호 변경'
                  },
                  {
                      key: 'logout',
                      label: '로그아웃'
                  },
              ]}
        />
    );

    return (
        <div className={"header"}>
            <div style={{padding: 20}}>
                <img width={200} src={"/images/cmx_logo.png"} alt={"commax_logo"}/>
            </div>
            <div className={"el-right card-grid"}>
                <Dropdown overlay={userMenu}
                          trigger={["click"]}
                          placement="bottomLeft">
                    <Space direction="horizontal" align="start">
                        <Avatar className={"card-grid"} icon={<UserOutlined/>}/>
                        <span className={"color-white"}>admin</span>
                    </Space>
                </Dropdown>
            </div>
        </div>
    )
}

export default CommonHeader;