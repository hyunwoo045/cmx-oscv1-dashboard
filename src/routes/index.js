import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as Pages from "../pages";

const routes = (
    <Router>
        <Routes>
            <Route path={"/login"} element={<Pages.Login/>}/>
            <Route path={"/"} element={<Pages.Main/>}>
                <Route path={"/home"} element={<Pages.Home/>}/>
                <Route path={"/admin"} element={<Pages.Admin/>}/>

                <Route path={"/wallpad_pageopen"} element={<Pages.WallpadPageOpen/>}/>
                <Route path={"/wallpad_signup"} element={<Pages.WallpadSignup/>}/>
                <Route path={"/wallpad_init"} element={<Pages.WallpadInitialize/>}/>
                <Route path={"/wallpad_local"} element={<Pages.WallpadLocal/>}/>

                <Route path={"/homeiot_login"} element={<Pages.HomeIoTLogin/>}/>
                <Route path={"/homeiot_register"} element={<Pages.HomeIoTRegister/>}/>
                <Route path={"/homeiot_control"} element={<Pages.HomeIoTControl/>}/>

                <Route path={"/kt_login"} element={<Pages.KTAppLogin/>}/>
                <Route path={"/kt_control"} element={<Pages.KTAppControl/>}/>
                {/*<Route path={"/kt_public"} element={<Pages.KTAppPublic/>}/>*/}
            </Route>
        </Routes>
    </Router>
);

export default routes;