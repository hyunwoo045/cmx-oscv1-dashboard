import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: '제어번호',
        dataIndex: 'command_id',
        key: 'command_id',
        width: '80%',
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: 'homeID',
        dataIndex: 'home_id',
        key: 'home_id',
        width: '20%',
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: '요청시간',
        dataIndex: 'reg_date',
        key: 'reg_date',
        width: '180px',
        ellipsis: {
            showTitle: false,
        },
        render: (reg_date) => {
            return moment(reg_date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
]