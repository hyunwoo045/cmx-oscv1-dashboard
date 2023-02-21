import React from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";

export const ChangePwForm = (props) => {
    const onChangeOldPassword = (e) => props.changeOldPw(e.target.value);
    const onChangeNewPassword = (e) => props.changeNewPw(e.target.value);

    return (
        <Form>
            <Form.Item>
                <Input.Password label={"현재 비밀번호"}
                                prefix={<LockOutlined/>}
                                placeholder={"현재 비밀번호"}
                                onChange={onChangeOldPassword}
                                allowClear/>
                <div style={{width: "auto"}} align={"right"}>
                    <Button type={"primary"} htmlType={"submit"} onClick={props.validate}>
                        비밀번호 확인
                    </Button>
                </div>
            </Form.Item>
            <Form.Item>
                <Input.Password label={"새 비밀번호"}
                                prefix={<LockOutlined/>}
                                placeholder={"새 비밀번호"}
                                onChange={onChangeNewPassword}
                                allowClear/>
            </Form.Item>
        </Form>
    )
}