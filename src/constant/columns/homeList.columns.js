import {Button} from "antd";
import moment from "moment/moment";

const HomeListColumns = (searchSubDevice) => {
    return [
        {
            title: 'homeID',
            dataIndex: 'home_id',
            key: 'home_id',
            width: '20%',
            ellipsis: {
                showTitle: false,
            },
            render: (home_id) =>
                <Button onClick={() => searchSubDevice(home_id)}>
                    {home_id}
                </Button>
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
    ]
}

export default HomeListColumns;