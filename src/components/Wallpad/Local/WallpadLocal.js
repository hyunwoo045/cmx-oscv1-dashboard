import React, {useState} from 'react';
import {Divider, Space, Table} from "antd";
import columns from "../../../constant/columns/local.userList.columns";
import {districtUser} from "../../../api/user";
import {SearchBar} from "../../SearchBar";

const WallpadLocal = () => {

    const [resourceData, setResourceData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [district, setDistrict] = useState("");
    const [center, setCenter] = useState("");

    const onCenterChange = (value) => setCenter(value);
    const onDistrictChange = (value) => setDistrict(value);
    const searchLog = async () => {
        setLoading(true);

        const closure = {
            center, district
        };

        if (closure.center.length === 0) {
            alert("단지코드는 필수 입력 항목입니다.");
            return;
        } else {
            const result = await districtUser(closure);
            setResourceData(prevState => [...prevState, result]);
        }
        setLoading(false);
    }

    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>지역 코드로 사용자 리스트 조회</div>
            <Space direction={"vertical"} align={"start"}>
                <Space direction={"horizontal"} align={"start"}>
                    <SearchBar centerCodeRequired={true}
                               districtCodeRequired={true}
                               setCenterCd={onCenterChange}
                               setDistrictCd={onDistrictChange}
                               search={searchLog}/>
                </Space>
                <Space direction="horizontal" align="start">
                    <div style={{maxWidth: '80vw', marginTop: 40}} align="start">
                        <Divider orientation={'left'}>단지 내 유저 목록</Divider>
                        <Table size='small'
                               columns={columns}
                               dataSource={resourceData}
                               loading={loading}/>
                    </div>
                </Space>
            </Space>
        </div>
    )
}

export default WallpadLocal;