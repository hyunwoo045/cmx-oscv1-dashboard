import React, {useState} from 'react';
import {Space, Table} from "antd";
import doorColumns from "./door.columns";
import lookupColumns from "./lookup.columns";
import {CommentTargets} from "../../../CommentTargets";

const Visitor = () => {

    const emptyTexts = "검색 결과 없음";
    const [loading, setLoading] = useState(false);
    const [visitorList, setVisitorList] = useState([]);
    const [visitorContentList, setVisitorContentList] = useState([]);
    const [visitorDetailList, setVisitorDetailList] = useState([]);


    return (
        <Space direction={"vertical"} align={"start"}>
            <div>조회 버튼을 선택해서 해당 인덱스의 방문자 상세 조회 상태를 확인 하세요.</div>
            <Space direction={"horizontal"} align={"start"}>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: '30vw'}}>
                        <Table title={"부재중 방문자 목록 조회"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={doorColumns}
                               dataSource={visitorList}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: "10vw"}}>
                        <Table title={"방문자 목록 조회 상태"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={lookupColumns}
                               dataSource={visitorContentList}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}/>
                    </div>
                </Space>
                <Space direction={"vertical"} align={"start"}>
                    <div style={{width: '10vw'}}>
                        <Table title={"방문자 상세 조회 상태"}
                               size={"small"}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={lookupColumns}
                               dataSource={visitorDetailList}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}/>
                    </div>
                </Space>
            </Space>
            <Space direction={"horizontal"} align={"start"}>
                <Space direction={"vertical"} align={"start"}>
                    <div align={"right"}>
                        <div style={{minWidth: '80vw'}}></div>
                        <CommentTargets/>
                    </div>
                    <div style={{width: '85vw'}}>
                        <Table title={"부재중 방문자 로그"}
                               size={'small'}
                               showSorterTooltip={false}
                               bordered
                               pagination={false}
                               rowKey={record => record._id}
                               columns={}
                               dataSource={}
                               locale={{emptyText: emptyTexts}}
                               loading={loading}
                               scroll={{y: 150}}/>
                    </div>
                </Space>
            </Space>
        </Space>
    )
}

export default Visitor;