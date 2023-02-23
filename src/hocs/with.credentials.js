import {useDispatch, useSelector} from "react-redux";
import {selectAdmin, setUserInfo} from "../store/adminSlice";
import {useEffect} from "react";
import {tokenAdmin} from "../api/admin";
import {message} from "antd";
import {useNavigate} from "react-router-dom";

export const withCredentials = (WrappedComponent) => {
    return function WithCredentials(props) {
        const admin = useSelector(selectAdmin);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            async function fetchData(token) {
                const response = await tokenAdmin(token);
                if (!response) {
                    message.warning("세션이 만료되었습니다. 다시 로그인 하세요.").then();
                    navigate('/');
                }
                const payload = {
                    status: true,
                    userId: response.userId,
                    role: response.role,
                    token: response.token,
                    exp: response.exp
                }
                dispatch(setUserInfo(payload));

                return payload;
            }

            const now = Math.floor(Date.now() / 1000);
            if (!admin.status) {
                const token = localStorage.getItem('token');

                if (!token) {
                    message.warning("세션이 만료되었습니다. 다시 로그인 하세요.").then();
                    navigate('/');
                    // return;
                } else {
                    fetchData(token).then();
                }
            } else if (admin.status && admin.exp < now) {
                message.warning("세션이 만료되었습니다. 다시 로그인 하세요").then();
                navigate('/');
            }
        }, [admin.exp, admin.status, dispatch, navigate]);

        return (
            <WrappedComponent userId={admin.userId} role={admin.role} {...props}/>
        )
    }
}