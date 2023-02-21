import {Button, Tag} from "antd";

const deviceColumns = (deviceDetail) => {
    return [
        {
            title: '기기 이름',
            dataIndex: 'nickname',
            key: 'nickname',
            width: '15%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '분류',
            dataIndex: 'sort',
            key: 'sort',
            width: '20%',
            ellipsis: {
                showTitle: false,
            },
            render: (sort, row) =>
                <Button onClick={() => deviceDetail(row.nickname, row.rootUuid, row.subUuid)}>{sort}</Button>
        },
        {
            title: '상태',
            dataIndex: 'value',
            key: 'value',
            width: '12%',
            ellipsis: {
                showTitle: false,
            },
            render: (value) => {
                if (value !== null) {
                    if (value.toLowerCase() === 'off') {
                        return <Tag color="red">OFF</Tag>
                    } else if (value.toLowerCase() === 'on') {
                        return <Tag color="blue">ON</Tag>
                    } else {
                        return <Tag color="green">{value}</Tag>
                    }
                } else {
                    return ""
                }
            }
        },
        {
            title: 'rootUuid',
            dataIndex: 'rootUuid',
            key: 'rootUuid',
            width: '35%',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'subUuid',
            dataIndex: 'subUuid',
            key: 'subUuid',
            width: '35%',
            ellipsis: {
                showTitle: false,
            },
        },
    ]
}

export default deviceColumns;