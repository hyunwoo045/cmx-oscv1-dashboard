import {Button, Divider, Table} from "antd";
import {useEffect, useState} from "react";
import {delUser, getAllUser} from "../../api/admin";
import {auditLog} from "../../api/log";
import {withCredentials} from "../../hocs";
import historyColumns from '../../constant/columns/audit.logs.columns';
import adminListColumns from "../../constant/columns/adminList.columns";
import {CreateAdminModal} from "../../modals";

const Admin = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [userList, setUserList] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);
    const [logLoading, setLogLoading] = useState(false);

    useEffect(() => {
        console.log(">> admin");
        async function fetchData() {
            const userList = await getAllUser();
            setUserList(userList);
        }

        const role = props.role;
        if (role === 'admin') {
            setButtonStatus(false);
        }

        fetchData().then();
    }, [props.role]);

    const deleteUser = async (userId) => {
        const closure = {userId}
        await delUser(closure);

        const userList = await getAllUser();
        setUserList(userList);
    }

    const getUserHistory = async (userId) => {
        setLogLoading(true);

        const logs = await auditLog(userId);
        setAuditLogs(logs);

        setLogLoading(false);
    }

    const showModal = () => {
        setModalOpen(true);
    }
    const onCancelModal = () => {
        setModalOpen(false);
    }

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>관리자 페이지</div>
            <div style={{maxWidth: "70vw"}}>
                <CreateAdminModal isOpen={modalOpen}
                                  onChangeModalOpen={onCancelModal}/>
                <Divider orientation={"left"}>관리자 정보</Divider>
                <Button onClick={showModal} type={"primary"}>신규 등록</Button>
                <div style={{marginTop: 20}}/>
                <Table size='small'
                       columns={adminListColumns(getUserHistory, deleteUser, buttonStatus)}
                       dataSource={userList}/>
            </div>
            <div style={{maxWidth: '70vw', marginTop: 200}}>
                <Divider orientation={'left'}>관리자 로그</Divider>
                <Table size='small'
                       columns={historyColumns}
                       dataSource={auditLogs}
                       loading={logLoading}/>
            </div>
        </div>
    )
}

export default withCredentials(Admin);