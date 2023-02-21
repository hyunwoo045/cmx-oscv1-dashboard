import React from 'react';
import {Avatar, Space, Tooltip} from "antd";
import {Comment} from "@ant-design/compatible";

const CommentTargets = () => {

    return (
        <Space direction={"horizontal"} align={"start"}>
            <Comment content={"유저"}
                     avatar={
                         <Tooltip title={"유저"}>
                             <Avatar style={{backgroundColor: 'lightblue'}}
                                     shape={"square"}
                                     size={20}>U
                             </Avatar>
                         </Tooltip>}/>
            <Comment content={"클라우드"}
                     avatar={
                         <Tooltip title={"클라우드"}>
                             <Avatar style={{backgroundColor: 'deepskyblue'}}
                                     shape={"square"}
                                     size={20}>C
                             </Avatar>
                         </Tooltip>}/>
            <Comment content={"월패드"}
                     avatar={
                         <Tooltip title={"월패드"}>
                             <Avatar style={{backgroundColor: 'burlywood'}}
                                     shape={"square"}
                                     size={20}>W
                             </Avatar>
                         </Tooltip>}/>
            <Comment content={"모바일"}
                     avatar={
                         <Tooltip title={"모바일"}>
                             <Avatar style={{backgroundColor: 'blueviolet'}}
                                     shape={"square"}
                                     size={20}>M
                             </Avatar>
                         </Tooltip>}/>
        </Space>
    )
}

export default CommentTargets;