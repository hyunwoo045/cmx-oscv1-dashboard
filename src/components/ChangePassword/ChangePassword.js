import React, {useState} from 'react';
import {message, Modal} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {ChangePwForm} from "./Form";
import {changePassword, validate} from "../../api/admin";

export const ChangePwModal = (props) => {
    const [valid, setValid] = useState(false);
    const [oldPw, setOldPw] = useState("");
    const [newPw, setNewPw] = useState("");

    const validatePwChange = async () => {
        const {result} = await validate(props.id, oldPw);

        if (!result) alert("현재 비밀번호를 확인해 주세요");
        else if (result) {
            alert("확인되었습니다. 비밀번호를 변경해주세요.");
            setValid(true);
        }
    }

    const passwordUpdate = async () => {
        if (valid) await changePassword(props.userId, newPw);
        else alert("현재 비밀번호가 확인되지 않았습니다.");
    }
    const onChangeOldPw = (val) => setOldPw(val);
    const onChangeNewPw = (val) => setNewPw(val);

    return Modal.confirm({
        title: (<>비밀번호를 입력해주세요.</>),
        icon: <ExclamationCircleOutlined/>,
        content: <ChangePwForm changeOldPw={onChangeOldPw}
                               changeNewPw={onChangeNewPw}
                               validate={validatePwChange}/>,
        onText: "변경",
        cancelText: "취소",
        async onOk() {
            await passwordUpdate();
            message.success("비밀번호 변경 완료.", 2);
        },
        onCancel() {
        },
    })
}