import moment from "moment/moment";
import {Button, Popover, Tag} from "antd";
import {PartCard} from "../../components";

const logColumns = () => {
    return [
        {
            title: '요청시간',
            dataIndex: "resTime",
            width: '25%',
            key: 'resTime',
            ellipsis: {showTitle: false},
            render: (date) => {
                return moment(date).format('YY-MM-DD HH:mm:ss')
            }
        },
        {
            title: '처리시간',
            dataIndex: "duration",
            width: '15%',
            key: 'duration',
            render: (ms) => {
                const sec = ms / 1000;
                return <>{sec} 초</>
            }
        },
        {
            title: '응답코드',
            dataIndex: 'responseCode',
            key: 'responseCode',
            width: '15%',
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
            render: (errorCode) => {
                if (errorCode !== null) {
                    return <Tag color="red">{errorCode}</Tag>
                } else return <>-</>
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
            width: '70%',
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
}

export default logColumns;