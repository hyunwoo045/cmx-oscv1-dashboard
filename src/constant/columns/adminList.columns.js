import moment from "moment/moment";
import {Button} from "antd";

const adminListColumns = (getUserHistory, deleteUser, buttonStatus) => {
    return [
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
                <Button onClick={() => deleteUser(userid)}
                        disabled={buttonStatus}
                        danger>
                    삭제
                </Button>
        },
    ]
}

export default adminListColumns;
