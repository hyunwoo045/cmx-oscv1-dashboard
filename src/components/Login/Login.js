import React, {useState} from 'react';
import {Button, Form, Input, Layout, message, Space} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {PageHeader} from '@ant-design/pro-layout';
import {auditLog, lastLogin, login, logout, getUser} from "../../api/admin";
import {ChangePwModal} from "../ChangePassword";

const Login = () => {
    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    const onClickLoginBtn = async () => {
        let isInit;

        const {result} = await getUser(userId, password);
        if (result[0].init === "Y") isInit = true;
        else if (result[0].init === "N") isInit = false;
        else alert('Unknown Error');

        const loginResponse = await login(userId, password);
        const loginSuccess = loginResponse.success;
        const loginResult = loginResponse.result;
        if (loginSuccess) {
            if (!loginResult) {
                const auditLogResponse = await auditLog(userId, "ClickLoginBtn", `로그인 실패 (ID: ${userId})`);
                if (!auditLogResponse.success) alert('Network Error: 로그 입력에 실패하였습니다. 관리자에 문의하세요.');

                alert("비밀번호를 다시 확인하여 주세요.");
            } else {
                if (isInit) {
                    await logout();
                    ChangePwModal({userId});
                } else if (!isInit) {
                    await lastLogin(userId, password);
                    const auditLogResponse = await auditLog(userId, "ClickLoginBtn", `로그인 성공 (ID: ${userId})`);
                    if (!auditLogResponse.success) alert('Network Error: 로그 입력에 실패하였습니다. 관리자에 문의하세요.');

                    // TODO: navigate to /home
                    message.success('로그인 성공!', 2);
                }
            }
        } else {
            const auditLogResponse = await auditLog(userId, "ClickLoginBtn", `로그인 실패 (ID: ${userId})`);
            if (!auditLogResponse.success) alert('Network Error: 로그 입력에 실패하였습니다. 관리자에 문의하세요.');

            alert('존재하지 않는 아이디 입니다.');
            window.location.reload();
        }
    }

    const changeId = (e) => setId(e.target.value);
    const changePw = (e) => setPassword(e.target.value);


    return (
        <Layout style={{minHeight: "100vh"}}>
            <Space direction={"vertical"} align={"center"}>
                <div style={{padding: 150}}>
                    <img width={200} src={"/images/cmx_logo.png"} alt={"Commax Logo"}/>
                </div>
                <PageHeader
                    style={{fontWeight: 100}}
                    title={"운영 관제 시스템"}>
                    <div style={{minWidth: 100}} align={"right"}>
                        <Form>
                            <Form.Item>
                                <Input
                                    prefix={<UserOutlined/>}
                                    placeholder="ID"
                                    allowClear
                                    onChange={changeId}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password
                                    prefix={<LockOutlined/>}
                                    placeholder="password"
                                    allowClear
                                    onPressEnter={login}
                                    onChange={changePw}
                                />
                            </Form.Item>
                        </Form>
                        <Space direction={"horizontal"}>
                            <Button type={"primary"}
                                    onClick={onClickLoginBtn}>
                                로그인
                            </Button>
                        </Space>
                    </div>
                </PageHeader>
            </Space>
        </Layout>
    )
}

export default Login;