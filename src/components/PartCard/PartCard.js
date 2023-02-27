import {Tag} from "antd";

const PartCard = (props) => {

    const def = {
        'cloud': <Tag color={'geekblue'}>cloud</Tag>,
        'wallpad': <Tag color={'green'}>wallpad</Tag>,
        'mobile': <Tag color={'purple'}>mobile</Tag>,
        'user': <Tag color={'cyan'}>user</Tag>
    }

    return (
        <>
            {props.tag !== undefined ? def[props.tag] : <Tag>etc</Tag>}
        </>

    )
}

export default PartCard;