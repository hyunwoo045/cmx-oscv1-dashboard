import moment from "moment";
import {Avatar, Tag} from "antd";
import {Comment} from "@ant-design/compatible";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: '요청시간',
        dataIndex: ['reqTime'],
        width: '180px',
        key: 'reqTime',
        ellipsis: {
            showTitle: false,
        },
        render: (date) => {
            return moment(date).format('YYYY-MM-DD HH:mm:ss:SSS')
        }
    },
    {
        title: '응답시간',
        dataIndex: ['resTime'],
        width: '180px',
        key: 'resTime',
        ellipsis: {
            showTitle: false,
        },
        render: (date) => {
            if (date === null) {
                return ("알 수 없음")
            } else {
                return moment(date).format('YYYY-MM-DD HH:mm:ss:SSS')
            }
        }
    },
    {
        title: '처리시간',
        dataIndex: 'processTime',
        width: '15%',
        key: 'processTime',
        ellipsis: {
            showTitle: false,
        },
        render: (time, row) => {
            if (row.resTime === null) {
                return ("알 수 없음")
            } else {
                return (
                    moment(row.resTime).diff(moment(row.reqTime), 'milliseconds') + ' ms')
            }
        }
    },
    {
        title: '응답코드',
        dataIndex: 'responseCode',
        key: 'responseCode',
        width: '15%',
        ellipsis: {
            showTitle: false,
        },
        render: (responseCode) => {
            if (responseCode !== 200) {
                return <Tag color="red">{responseCode}</Tag>
            } else {
                return <Tag color="green">{responseCode}</Tag>
            }
        }
    },
    {
        title: '에러코드',
        dataIndex: 'errorCode',
        key: 'errorCode',
        width: '15%',
        ellipsis: {
            showTitle: false,
        },
        render: (errorCode) => {
            if (errorCode !== null) {
                return <Tag color="red">{errorCode}</Tag>
            }
        }
    },
    {
        title: '에러메시지',
        dataIndex: 'msg',
        key: 'msg',
        width: '70%',
        ellipsis: false,
        render: (msg, record) => {
            if (record.tag === "OK") {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'green'}} shape="square" size={20}>OK</Avatar>}
                    />
                )
            } else if (record.tag === "user") {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'lightblue'}} shape="square" size={20}>U</Avatar>}
                    />
                )

            } else if (record.tag === "cloud") {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'deepskyblue'}} shape="square"
                                        size={20}>C</Avatar>}
                    />
                )

            } else if (record.tag === "wallpad") {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'burlywood'}} shape="square" size={20}>W</Avatar>}
                    />
                )

            } else if (record.tag === "mobile") {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'blueviolet'}} shape="square" size={20}>M</Avatar>}
                    />
                )

            } else {
                return (
                    <Comment
                        content={msg}
                        avatar={<Avatar style={{backgroundColor: 'silver'}} shape="square" size={20}>etc</Avatar>}
                    />
                )

            }
        }
    }
]