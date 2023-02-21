import moment from "moment";
import {Button} from "antd";

const doorColumns = () => {
    return [
        {
            title: 'doorindex',
            dataIndex: 'doorindex',
            width: '130px',
            key: 'doorindex',
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: '위치',
            dataIndex: 'location',
            width: '50px',
            key: 'location',
            ellipsis: {
                showTitle: false,
            },
            render: (location, row) => {
                if (location === null) {
                    return ("알 수 없음")
                } else if (location === "lobby") {
                    return (location = "로비")
                } else if (location === "door") {
                    return (location = "문")
                }
            },
        },
        {
            title: '날짜',
            dataIndex: 'doordate',
            width: '150px',
            key: 'doordate',
            ellipsis: {
                showTitle: false,
            },
            render: (doordate, row) => {
                if (doordate === null) {
                    return ("알 수 없음")
                } else {
                    return moment(doordate.slice(0, 8) + "T" + doordate.slice(8,)).format('YYYY-MM-DD HH:mm')
                }
            }
        },
        {
            title: '상세 조회',
            dataIndex: 'doorindex',
            width: '100px',
            key: 'doorindex',
            ellipsis: {
                showTitle: false,
            },
            render: (doorindex) =>
                <Button onClick={() => VisitorDetail(doorindex)}>조회</Button>
        },
    ]
}
export default doorColumns;