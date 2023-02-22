import {Content} from "antd/es/layout/layout";
import {Button, Form, Input, message, Select, Space, Table, Tooltip} from "antd";
import {PageHeader} from "@ant-design/pro-layout";
import {useEffect, useState} from "react";
import moment from "moment";
import {delUser, getAllUser, getUser, modify, signup} from "../../api/admin";
import {auditLog} from "../../api/log";
import {cookieToObj} from "../../utils";
import {withCredentials} from "../../hocs";

const Admin = () => {
    const [buttonStatus, setButtonStatus] = useState(true);
    const [userList, setUserList] = useState([]);
    const [auditLogs, setAuditLogs] = useState();
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [role, setRole] = useState("");
    useEffect(() => {
        const {userId, role} = cookieToObj(document.cookie);
        if (!userId || !role) {
            alert("Warning: Cookie 에 userId, role 이 설정되지 않음!");
            setButtonStatus(false);
        }
        setCurrentUser(userId);
        setRole(role);

        console.log(`You are ${currentUser}`);
    }, [buttonStatus, currentUser]);

    const columns = [
        {
            title: '등록 시간',
            dataIndex: 'regdate',
            width: '180px',
            key: 'regdate',
            ellipsis: {showTitle: false},
            render: (regdate) => {
                return moment(regdate).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        {
            title: '유저 ID',
            dataIndex: 'userid',
            width: '20%',
            key: 'userid',
            ellipsis: {
                showTitle: false,
            },
            render: (userid) =>
                <Button onClick={() => getUserHistory(userid)}>{userid}</Button>
        },
        {
            title: '유저 이름',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '유저 권한',
            dataIndex: 'role',
            key: 'role',
            width: '15%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '상태',
            dataIndex: 'init',
            key: 'init',
            width: '15%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '최근 로그인',
            dataIndex: 'lastlogin',
            width: '180px',
            key: 'lastlogin',
            ellipsis: {
                showTitle: false,
            },
            render: (lastlogin) => {
                if (lastlogin !== null) {
                    return moment(lastlogin).format('YYYY-MM-DD HH:mm:ss')
                } else {

                }
            }
        },
        {
            title: '삭제',
            dataIndex: 'userid',
            key: 'userid',
            width: '15%',
            ellipsis: false,
            render: (userid) =>
                <Button
                    onClick={() => deleteUser(userid)}
                    disabled={buttonStatus}>
                    삭제
                </Button>
        },
    ];

    const historyColumns = [
        {
            title: 'No',
            dataIndex: 'no',
            width: '5%',
            key: 'no',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'DateTime',
            dataIndex: 'auditdate',
            width: '180px',
            key: 'auditdate',
            ellipsis: {
                showTitle: false,
            },
            render: (auditdate) => {
                return moment(auditdate).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        {
            title: '유저 ID',
            dataIndex: 'userid',
            width: '10%',
            key: 'userid',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: '20%',
            key: 'action',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Detail',
            dataIndex: 'detail',
            width: '40%',
            key: 'detail',
            ellipsis: {
                showTitle: false,
            },
        },
    ]

    const emptyTexts = "검색 결과 없음";

    const getUserHistory = async (userId) => {
        setLoading(true);
        const logs = await auditLog(userId);
        setAuditLogs(logs);
        setLoading(false);
    }

    const deleteUser = async (userId) => {
        setLoading(true);

        if (role !== "admin" || role !== "RWUser") {
            message.error(
                "권한이 없습니다.", 0.5, () => {
                }
            );
        } else {
            const closer = {userId}
            const isDeleted = await delUser(closer);
            if (isDeleted === 1) message.success(`${closer.userId} 유저가 삭제되었습니다.`, 2);

            await getUserList();
        }
    }

    const getUserList = async () => {
        setLoading(true);
        const userList = await getAllUser();
        setUserList(userList);

        const logs = await auditLog(null);
        setAuditLogs(logs);
        setLoading(false);
    }

    const createNewUser = async (values) => {
        const closer = {
            userId: values.userId,
            userName: values.userName,
            password: values.password,
            role: values.role
        }
        const getUserResponse = await getUser(closer.userId, closer.password);
        const isExist = getUserResponse.findUser;

        if (!isExist) {
            const result = await signup(closer);
            if (result === 1) message.success(`${closer.userId} 유저가 생성되었습니다.`, 2);
        } else {
            const result = await modify(closer);
            if (result === 1) message.success(`${closer.userId} 유저가 업데이트 되었습니다.`, 2);
        }

        await getUserList();
    }

    return (
        <Content>
            <Space>
                <PageHeader title={"관리자 페이지"}/>
            </Space>
            <div style={{margin: '0px 0px', padding: 20, minHeight: 804}}>
                <Space direction={"vertical"} align={"start"}>
                    <Space direction={"horizontal"} align={"start"}>
                        <div style={{width: "30vw"}}>
                            <Form name={"basic"}
                                  labelCol={{span: 8}}
                                  wrapperCol={{span: 16}}
                                  onFinish={createNewUser}
                                // onFinishFailed={""}
                                  autoComplete={"off"}
                                  initialValues={{
                                      'userId': '',
                                      'userName': '',
                                      'password': '',
                                      'role': ''
                                  }}>
                                <Form.Item label={"UserId"} name={"userId"}
                                           rules={[{required: true, message: "Please input your userId!"}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label={"Username"} name={"userName"}
                                           rules={[{required: true, message: "Please input your username!"}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Password" name="password"
                                           rules={[{required: true, message: 'Please input your password!'}]}>
                                    <Input.Password/>
                                </Form.Item>
                                <Form.Item label={"Role"} name={"role"}
                                           rules={[{required: true}]}>
                                    <Select placeholder={"권한은 선택해 주세요"} allowClear>
                                        <Select.Option value={"admin"}>admin</Select.Option>
                                        <Select.Option value={"RWuser"}>RWuser</Select.Option>
                                        <Select.Option value={"ROuser"}>ROuser</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                    <Button type={"primary"} htmlType={"submit"} disabled={buttonStatus}>
                                        등록
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div style={{width: "50vw"}}>
                            <Table title={() =>
                                <div style={{fontSize: 15}}>
                                    <Tooltip title="">유저 정보 조회</Tooltip>
                                    <Button
                                        type="primary"
                                        onClick={() => getUserList()}>검색</Button>
                                </div>
                            }
                                   size='small'
                                   showSorterTooltip={false}
                                   bordered
                                   rowKey={(record) => record.userid}
                                   pagination={false}
                                   columns={columns}
                                   dataSource={userList}
                                   locale={{emptyText: emptyTexts}}
                                // onChange={onChange}
                                   loading={loading}
                                   scroll={{y: 300}}/>
                        </div>
                    </Space>
                    <div style={{width: "80vw"}}>
                        <Table
                            title={() => "AuditLog"}
                            size='small'
                            showSorterTooltip={false}
                            bordered
                            rowKey={(record) => record.no}
                            pagination={{
                                position: ["bottomCenter"],
                                pageSize: 50,
                                total: 0, showTotal: (total) => `총 ${total}건`
                            }}
                            columns={historyColumns}
                            dataSource={auditLogs}
                            locale={{emptyText: emptyTexts}}
                            // onChange={onChange}
                            loading={loading}
                            scroll={{y: 300}}/>
                    </div>
                </Space>
            </div>
        </Content>
    )
}

export default withCredentials(Admin);