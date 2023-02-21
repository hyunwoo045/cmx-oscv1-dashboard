import React, {useState} from 'react';
import {Space, Table} from "antd";
import {CommentTargets} from "../../../CommentTargets";
import carInfoColumns from "./carInfo.columns";
import carInfoLogColumns from "./carInfo.log.columns";
import carReservationColumns from "./car.reservation.columns";
import carReserveColumns from "./car.reserve.columns";

const Parking = () => {

    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const [carLogs, setCarLogs] = useState([]);
    const [carReservationList, setCarReservationList] = useState([]);
    const [carReserveLogs, setCarReserveLogs] = useState([]);
    const [parkingEventLogs, setParkingEventLogs] = useState([]);
    const emptyTexts = "검색 결과 없음";

    return (
        <Space direction={"vertical"} align={"start"}>
            <div align={"right"}>
                <div style={{minWidth: '80vw'}}></div>
                <CommentTargets/>
            </div>
            <Space direction={"horizontal"} align={"start"}>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: "15vw"}}>
                        <Table title={"차량 목록 조회"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={carInfoColumns}
                               dataSource={cars}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: '65vw'}}>
                        <Table title={"차량 목록 조회 로그"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={carInfoLogColumns}
                               dataSource={carLogs}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
            </Space>

            <Space direction={"horizontal"} align={"start"}>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: '25vw'}}>
                        <Table title={"방문자 차량 예약"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={carReservationColumns}
                               dataSource={carReservationList}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: "55vw"}}>
                        <Table title={"방문자 차량 예약 로그"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={carReserveColumns}
                               dataSource={carReserveLogs}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
            </Space>
            <Space direction={"horizontal"} align={"start"}>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: '80vw'}}>
                        <Table title={"주차 정보 이벤트 로그"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={carReserveLogs}
                               dataSource={parkingEventLogs}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
            </Space>
        </Space>
    )
}

export default Parking;