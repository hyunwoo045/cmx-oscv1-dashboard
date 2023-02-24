import api from '../api';
import {handleResponseError} from "../../common";

const path = "/api/users"
export const initStatusLog = async (userId, userNo) => {
    const response = await api.get(path + "/init-status", {params: {userId, userNo}});
    if (response.data.success) {
        return {
            userDeleted: response.data.userDeleted,
            tokenDeleted: response.data.tokenDeleted
        }
    } else {
        alert(response.data.error);
    }
}

export const districtUser = async (body) => {
    try {
        const response = await api.post(path + "districtuser", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const checkRegistration = async (userId) => {
    try {
        const response = await api.get(path + `/resource?userId=${userId}`);
        if (response.data.success) return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getLogsUserReg = async (body) => {
    try {
        const response = await api.post(path + "/log/reg-user", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const getLogsUserAuth = async (body) => {
    try {
        const response = await api.post(path + "/log/auth", body);
        if (response.data.success) return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const getLogsOauth = async (body) => {
    try {
        const response = await api.post(path + "/log/oauth", body);
        if (response.data.success) return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const getUserResourceInfo = async (userId) => {
    try {
        const response = await api.get(path + `/resource/info?userId=${userId}`);
        if (response.data.success) return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}