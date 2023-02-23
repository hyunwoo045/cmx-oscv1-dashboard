import React from 'react';
import {
    Header as HeaderComponent,
    Sidebar as SidebarComponent
} from '../../components';
import {Outlet} from "react-router-dom";

const Main = () => {

    return (
        <>
            <HeaderComponent/>
            <div className={"content"}>
                <SidebarComponent/>
                <Outlet/>
            </div>
        </>
    )
}

export default Main;