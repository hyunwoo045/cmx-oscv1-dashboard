import React, {useEffect, useState} from 'react';
import './SearchBar.scss';
import {getModelNames} from "../../api/resource";
import {AutoComplete, Button, DatePicker, Input} from "antd";

const SearchBar = (props) => {

    const {RangePicker} = DatePicker;

    const [options, setOptions] = useState([]);
    const [modelList, setModelList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const list = await getModelNames();
            setModelList(list);

            const ops = [];
            list.forEach(model => ops.push({value: model}))

            setOptions(ops);
        }
        fetchData().then(() => {
        });
    }, []);

    const onChangeUserId = (e) => props.setUserId(e.target.value);

    const onChangeCenterCd = (e) => props.setCenterCd(e.target.value);

    const onChangeDistrictCd = (e) => props.setDistrictCd(e.target.value);

    const onChangeDate = (value) => props.setDateRange(value);

    const onSelectModelName = (value, option) => {
        props.setModelName(value)
    }

    const onChangeModelName = (value) => {
        let filtered = modelList.filter(obj => obj.toLowerCase().includes(value.toLowerCase()));
        let ops = [];
        filtered.forEach(v => ops.push({value: v}));
        setOptions([...ops]);
    };


    return (
        <div className={"input-box"}>
            <Input.Group>
                {props.userIdRequired ?
                    <>
                        <span className={"input-box-label"}>유저 ID: </span>
                        <Input placeholder={"유저 ID를 입력해주세요"}
                               onChange={onChangeUserId}
                               style={{width: 200}}/>
                    </>
                    : null}
                {props.modelNameRequired ?
                    <>
                        <span className={"input-box-label"}>모델명: </span>
                        <AutoComplete placeholder={"월패드 모델명을 입력하세요"}
                                      style={{width: 200}}
                                      allowClear
                                      options={options}
                                      onChange={onChangeModelName}
                                      onSelect={onSelectModelName}/>
                    </>
                    : null}
                {props.centerCodeRequired ?
                    <>
                        <span className={"input-box-label"}>단지코드: </span>
                        <Input placeholder={"단지 코드를 입력하세요"}
                               onChange={onChangeCenterCd}
                               style={{width: 200}}/>
                    </>
                    : null}
                {props.districtCodeRequired ?
                    <>
                        <span className={"input-box-label"}>서브지역코드: </span>
                        <Input placeholder={"서브지역코드를 입력하세요"}
                               onChange={onChangeDistrictCd}
                               style={{width: 200}}/>
                    </>
                    : null}
                {props.dateRangeRequired ?
                    <>
                        <span className={"input-box-label"}>날짜: </span>
                        <RangePicker showTime
                                     format={"YYYY-MM-DD HH:mm:ss"}
                                     onChange={onChangeDate}
                                     allowClear/>
                    </>
                    : null}
                <>
                    <Button className={"search-btn"}
                            type={"primary"}
                            onClick={props.search}>
                        검색
                    </Button>
                </>
            </Input.Group>
        </div>
    )
}

export default SearchBar;