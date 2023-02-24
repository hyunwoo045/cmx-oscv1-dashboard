import React from "react";
import './Header.scss';
import {useSelector} from "react-redux";
import {selectAdmin} from "../../store/adminSlice";
import {useNavigate} from "react-router-dom";
import {Dropdown, Space} from "antd";

const CommonHeader = () => {
    const adminInfo = useSelector(selectAdmin);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const items = [
        {
            label: <div onClick={logout}>로그아웃</div>,
            key: '0'
        }
    ]

    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img width={200} src={"/images/cmx_logo.png"} alt={"commax_logo"}/>
            </div>
            <div className={"user-menus"}>
                {(adminInfo.role === "admin")
                    ? <>
                        <div className={"user-menu"} onClick={() => navigate('/admin')}>설정</div>
                        <div className={'v-divider'}>|</div>
                    </>
                    : null}
                <div className={"user-menu"}>
                    <Dropdown menu={{items}} trigger={['click']}>
                        <Space>
                            {adminInfo.userId}({adminInfo.role})
                        </Space>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default CommonHeader;