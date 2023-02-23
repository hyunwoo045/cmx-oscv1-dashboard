import {Input, message, Modal, Select} from "antd";
import {useState} from "react";
import './CreateNewUser.scss';
import {getUser, modify, signup} from "../../api/admin";

const CreateNewUser = (props) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const [inputs, setInputs] = useState({
        userId: "",
        userName: "",
        password: "",
        role: ""
    });
    const [inputValidator, setInputValidator] = useState({
        userId: false,
        userName: false,
        password: false,
        role: false,
    });

    const createAdmin = async () => {
        const closure = {...inputs};
        if (closure.userId.length === 0) {
            setInputValidator({...inputValidator, userId: true});
            return;
        }
        if (closure.userName.length === 0) {
            setInputValidator({...inputValidator, userName: true});
            return;
        }
        if (closure.password.length === 0) {
            setInputValidator({...inputValidator, password: true});
            return;
        }

        const user = await getUser(closure.userId, closure.password);
        if (user.findUser) {
            const result = await signup(closure);
            if (result === 1) message.success("유저가 생성되었습니다", 2);
        } else {
            const result = await modify(closure);
            if (result === 1) message.success("유저가 생성되었습니다", 2);
        }

        props.onChangeModalOpen(false);
    }

    const onChangeUserId = (e) => {
        setInputs({...inputs, userId: e.target.value});
    }

    const onChangeName = (e) => {
        setInputs({...inputs, userName: e.target.value});
    }

    const onChangePassword = (e) => {
        setInputs({...inputs, password: e.target.value})
    }

    const handleSelectChange = (value) => {
        setInputs({...inputs, role: value})
    }

    const onCancel = () => {
        props.onChangeModalOpen(false);
    }

    return (
        <Modal title={"신규 관리자 등록"}
               open={props.isOpen}
               onOk={createAdmin}
               onCancel={onCancel}>
            <div style={{marginTop: 40}}/>
            <div className={"input"}>
                <div className={"input-label"}>아이디:</div>
                <Input placeholder={"관리자 아이디"}
                       onChange={onChangeUserId}
                       style={{width: 200}}/>
            </div>
            <div className={"input-warning"}>
                {inputValidator.userId ? "아이디는 필수 입력 항목입니다." : ""}
            </div>
            <div className={"input"}>
                <div className={"input-label"}>이름:</div>
                <Input placeholder={"이름"}
                       onChange={onChangeName}
                       style={{width: 200}}/>
            </div>
            <div className={"input-warning"}>
                {inputValidator.userId ? "이름은 필수 입력 항목입니다." : ""}
            </div>
            <div className={"input"}>
                <div className={"input-label"}>패스워드:</div>
                <Input.Password
                    placeholder="input password"
                    onChange={onChangePassword}
                    style={{width: 200}}
                    visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                />
            </div>
            <div className={"input-warning"}>
                {inputValidator.userId ? "패스워드는 필수 입력 항목입니다." : ""}
            </div>
            <div className={"input"}>
                <div className={"input-label"}>권한:</div>
                <Select placeholder={"권한을 선택해 주세요"}
                        allowClear
                        onChange={handleSelectChange}>
                    <Select.Option value={"admin"}>관리자</Select.Option>
                    <Select.Option value={"read-only"}>읽기 전용 관리자</Select.Option>
                </Select>
            </div>
            <div className={"input-warning"}>
                {inputValidator.userId ? "아이디는 필수 입력 항목입니다." : ""}
            </div>
        </Modal>
    )
}

export default CreateNewUser;