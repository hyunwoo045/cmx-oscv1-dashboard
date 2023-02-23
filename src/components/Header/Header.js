import React from "react";
import './Header.scss';

const CommonHeader = () => {

    // const onUserMenuClick = async (item) => {
    //     if (item.key === "logout") {
    //         await logout();
    //         navigate('/');
    //     } else if (item.key === "chpw") {
    //         ChangePwModal();
    //     }
    // }

    // const userMenu = (
    //     <Menu onClick={onUserMenuClick}
    //           theme="dark"
    //           items={[
    //               {
    //                   key: 'chpw',
    //                   label: '비밀번호 변경'
    //               },
    //               {
    //                   key: 'logout',
    //                   label: '로그아웃'
    //               },
    //           ]}
    //     />
    // );

    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img width={200} src={"/images/cmx_logo.png"} alt={"commax_logo"}/>
            </div>
            {/*<div className={"el-right card-grid"}>*/}
            {/*    <Dropdown trigger={["click"]}*/}
            {/*              placement="bottomLeft">*/}
            {/*        <Space direction="horizontal" align="start">*/}
            {/*            <Avatar className={"card-grid"} icon={<UserOutlined/>}/>*/}
            {/*            <span className={"color-white"}>admin</span>*/}
            {/*        </Space>*/}
            {/*    </Dropdown>*/}
            {/*</div>*/}
        </div>
    )
}

export default CommonHeader;