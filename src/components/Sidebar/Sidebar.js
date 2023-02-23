import React, {useState} from 'react';
import './Sidebar.scss'
import {Button, Menu} from "antd";
import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MobileOutlined,
    ShopFilled,
    TabletOutlined,
    WalletFilled
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const contents = [
        {
            key: '0',
            label: 'Home',
            icon: <HomeOutlined/>,
            onClick: () => navigate('/')
        },
        {
            key: '1',
            icon: <TabletOutlined/>,
            label: '1.0 월패드를 통한 가입 이슈',
            children: [
                {
                    key: '1-1',
                    icon: <WalletFilled/>,
                    label: '로그인 페이지 open',
                    onClick: () => navigate('/wallpad_pageopen')
                },
                {
                    key: '1-2',
                    icon: <WalletFilled/>,
                    label: '계정 등록',
                    onClick: () => navigate('/wallpad_signup')
                },
                {
                    key: '1-3',
                    icon: <WalletFilled/>,
                    label: '월패드 정보/계정초기화',
                    onClick: () => navigate('/wallpad_init')
                },
                {
                    key: '1-4',
                    icon: <WalletFilled/>,
                    label: '지역코드사용자리스트',
                    onClick: () => navigate('/wallpad_local')
                }
            ]
        },
        // {
        //     key: '2',
        //     icon: <MobileOutlined/>,
        //     label: '2.0 사용자 정보',
        //     children: [
        //         {
        //             key: '2-1',
        //             icon: <WalletFilled/>,
        //             label: '그룹 정보조회',
        //             onClick: () => window.location.replace('https://admin.commaxcloud.net/userinfo/groupinfomng')
        //         },
        //         {
        //             key: '2-2',
        //             icon: <WalletFilled/>,
        //             label: '사용자 정보조회',
        //             onClick: () => window.location.replace('https://admin.commaxcloud.net/userinfo/userinfomng')
        //         },
        //         {
        //             key: '2-3',
        //             icon: <WalletFilled/>,
        //             label: '사용자 정보조회',
        //             onClick: () => window.location.replace('https://admin.commaxcloud.net/resource/resourceinfomng')
        //         }
        //     ]
        // },
        {
            key: '3',
            icon: <MobileOutlined/>,
            label: 'Home IoT 앱 연동',
            children: [
                {
                    key: '3-1',
                    icon: <WalletFilled/>,
                    label: '로그인',
                    onClick: () => navigate('/homeiot_login')
                },
                {
                    key: '3-2',
                    icon: <WalletFilled/>,
                    label: '기기 등록',
                    onClick: () => navigate('/homeiot_register')
                },
                {
                    key: '3-3',
                    icon: <WalletFilled/>,
                    label: '제어',
                    onClick: () => navigate('/homeiot_control')
                }
            ]
        },
        {
            key: '4',
            icon: <ShopFilled/>,
            label: '3rd Party 앱 연동',
            children: [
                {
                    key: '4-1',
                    icon: <WalletFilled/>,
                    label: 'KT App',
                    children: [
                        {
                            key: '4-1-1',
                            icon: <WalletFilled/>,
                            label: 'KT로그인',
                            onClick: () => navigate('/kt_login')
                        },
                        {
                            key: '4-1-2',
                            icon: <WalletFilled/>,
                            label: 'KT제어',
                            onClick: () => navigate('/kt_control')
                        },
                        {
                            key: '4-1-3',
                            icon: <WalletFilled/>,
                            label: '단지 공용부 서비스',
                            onClick: () => navigate('/kt_public')
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <div className="side-bar">
            <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
            <Menu defaultOpenKeys={['0']}
                  defaultSelectedKeys={['0']}
                  theme="dark"
                  mode="inline"
                  inlineCollapsed={collapsed}
                  items={contents}/>
        </div>

    )
}

export default Sidebar;