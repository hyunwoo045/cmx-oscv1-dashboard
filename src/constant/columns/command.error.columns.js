import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: '제어번호',
        dataIndex: 'command_id',
        key: 'command_id',
        width: '25%',
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: '홈 번호',
        dataIndex: 'home_id',
        key: 'home_id',
        width: '5%',
        ellipsis: {
            showTitle: false,
        }
    },
    {
        title: '오류 시간',
        dataIndex: 'reg_date',
        key: 'reg_date',
        width: '20%',
        ellipsis: {
            showTitle: false,
        },
        render: (reg_date) => {
            return moment(reg_date).format('YYYY-MM-DD HH:mm:ss')
        }
    }
]