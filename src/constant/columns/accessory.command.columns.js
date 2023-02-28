import moment from "moment";
import {PartCard} from "../../components";
import {Button, Popover} from "antd";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: '트랜젝션 번호',
        dataIndex: 'transactionId',
        key: 'transactionId',
        width: '15%',
        ellipsis: {
            showTitle: false,
        },
    },
    {
        title: '요청시간',
        dataIndex: 'cgpAt',
        key: 'cgpAt',
        width: '15%',
        ellipsis: {
            showTitle: false,
        },
        render: (cgpAt) => {
            return moment(cgpAt).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    {
        title: '노티 전송시간',
        dataIndex: 'notifyAt',
        key: 'notifyAt',
        width: '20%',
        ellipsis: {
            showTitle: false,
        },
        render: (reportAt) => {
            return moment(reportAt).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    {
        title: "제어 유형",
        dataIndex: "command",
        key: "command",
        width: '15%',
        ellipsis: {
            showTitle: false,
        }
    },
    {
        title: "담당부서",
        dataIndex: "tag",
        key: "tag",
        width: "15%",
        render: (tag) => {
            return <PartCard tag={tag}/>
        }
    },
    {
        title: '에러메시지',
        dataIndex: 'message',
        key: 'message',
        width: '30%',
        render: (msg) => {
            const content = <>{msg}</>
            if (msg !== undefined) {
                return (
                    <Popover content={content} title={"error detail"} trigger={'click'}>
                        <Button>자세히 보기</Button>
                    </Popover>
                )
            } else return <>-</>
        }
    }
]