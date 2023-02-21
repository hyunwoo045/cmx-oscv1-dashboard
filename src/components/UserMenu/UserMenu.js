import React from 'react';
import {Menu} from "antd";
import {ChangePwModal} from "../ChangePassword";
import {logout} from "../../api/admin";

const UserMenu = () => {
    const onUserMenuClick = async (item) => {
        if (item.key === "logout") {
            await logout();
        } else if (item.key === "chpw") {
            ChangePwModal();
        }
    }

    return (
        <Menu onClick={onUserMenuClick}
              theme={"dark"}
              items={[
                  {
                      key: "chpw",
                      label: "비밀번호 변경"
                  },
                  {
                      key: "logout",
                      label: "로그아웃"
                  }
              ]}/>
    )


}

export default UserMenu;