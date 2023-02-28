import {Button, Popover, Table} from "antd";
import moment from "moment/moment";
import React, {useState} from "react";
import {getHomeErrHistory} from "../../api/accessory";
import commandErrorColumns from "./command.error.columns";

const HomeListColumns = (searchSubDevice) => {

    const [loading, setLoading] = useState(false);
    const [errHistoryContents, setErrHistoryContents] = useState([]);

    const getErrorHistory = async (homeId) => {
        setLoading(true);

        const result = await getHomeErrHistory(homeId);
        setErrHistoryContents([...result]);

        setLoading(false);
    }

    const content = (
        <div style={{maxWidth: '25vw'}}>
            응답받지 못한 제어 이력
            <Table size={'small'}
                   columns={commandErrorColumns}
                   dataSource={errHistoryContents}
                   loading={loading}
            />
        </div>
    )

    return [
        {
            title: '고유번호',
            dataIndex: 'home_id',
            key: 'home_id',
            width: '10%',
            render: (home_id) =>
                <Button onClick={() => searchSubDevice(home_id)}>
                    {home_id}
                </Button>
        },
        {
            title: '등록시간',
            dataIndex: 'reg_date',
            key: 'reg_date',
            width: '30%',
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
            width: '30%',
            ellipsis: {
                showTitle: false,
            },
            render: (update_date) => {
                return moment(update_date).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        {
            title: "-",
            key: "not_response",
            width: '20%',
            render: ({home_id}) => {
                return (
                    <Popover content={content} trigger={['click']}>
                        <Button onClick={() => getErrorHistory(home_id)}>미응답 이력 확인</Button>
                    </Popover>
                )
            }
        }
    ]
}

export default HomeListColumns;