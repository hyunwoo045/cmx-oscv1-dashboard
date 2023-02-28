import api from "../api";
import {handleResponseError} from '../../common';

const path = "/api/logs";

export const getCountryLogs = async (body) => {
    try {
        const response = await api.post(path + "/country", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const commandLog = async (body) => {
    try {
        const response = await api.post(path + "/command", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const auditLog = async (userId) => {
    try {
        const response = await api.post(path + "/auditlog", {userId});
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const wallpadRegisterLog = async (body) => {
    try {
        const response = await api.post(path + "/wallpad/register", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const initLog = async (userId) => {
    try {
        const response = await api.get(path + "/init", {params: {member_id: userId}});
        return response.data.result[0];
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const KTLoginLog = async (body) => {
    try {
        const response = await api.post(path + "/third-party/kt-login", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}


