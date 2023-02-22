import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Layout, message, Space} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {PageHeader} from '@ant-design/pro-layout';
import {login, tokenAdmin} from "../../api/admin";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserInfo} from "../../store/adminSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function fetchData(token) {
            const response = await tokenAdmin(token);
            if (response) {
                const payload = {
                    status: true,
                    userId: response.userId,
                    role: response.role,
                    token: response.token,
                    exp: response.exp
                }
                dispatch(setUserInfo(payload));
                navigate('/home')
            }
        }

        if (token) fetchData(token).then();
    }, [dispatch, navigate])

    const onClickLoginBtn = async () => {
        const response = await login(userId, password);
        if (response.success) {
            const payload = {
                status: true,
                userId: response.result.userId,
                role: response.result.role,
                token: response.result.token,
                exp: response.result.exp
            }
            dispatch(setUserInfo(payload))

            localStorage.setItem('token', response.result.token);
            navigate('/home');
        } else {
            message.error("로그인 실패. 아이디 혹은 패스워드를 확인해주세요.");
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