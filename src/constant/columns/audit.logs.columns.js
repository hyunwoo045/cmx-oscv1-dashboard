import moment from "moment/moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
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