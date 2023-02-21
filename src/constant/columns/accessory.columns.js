import moment from "moment/moment";
import {Button} from "antd";

const AccessoryColumns = (getAccHistory) => {
    return [
        {
            title: '악세사리 번호',
            dataIndex: 'acc_id',
            key: 'acc_id',
            width: '30%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '악세사리 이름',
            dataIndex: 'acc_name',
            key: 'acc_name',
            width: '45%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'homeID',
            dataIndex: 'home_id',
            key: 'home_id',
            width: '15%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '사용여부',
            dataIndex: 'use_flag',
            key: 'use_flag',
            width: '20%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '등록시간',
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
        {
            title: '삭제시간',
            dataIndex: 'update_date',
            key: 'update_date',
            width: '180px',
            ellipsis: {
                showTitle: false,
            },
            render: (update_date) => {
                return moment(update_date).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        {
            title: '기록조회',
            dataIndex: 'acc_id',
            key: 'acc_id',
            width: '100px',
            ellipsis: {
                showTitle: false,
            },
            render: (acc_id) =>
                <Button onClick={() => getAccHistory(acc_id)}>조회</Button>
        },
    ]
}

export default AccessoryColumns;