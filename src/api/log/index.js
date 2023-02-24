import api from "../api";
import {handleResponseError} from '../../common';

const path = "/api/logs";

export const auditLog = async (userId) => {
    try {
        const response = await api.post(path + "/auditlog", {userId});
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const wallpadLoginLog = async (body) => {
    try {
        const response = await api.post(path + "/wallpad/login", body);
        return response.data;
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

export const reportLog = async (body) => {
    try {
        const response = await api.post(path + "/report", body);
        return response.data.result[0];
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const userRegisterLog = async (body) => {
    try {
        const response = await api.post(path + "/user/register", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const loginQueryLog = async (body) => {
    try {
        const response = await api.post(path + "/login-query", body);
        if (response.data.success) return response.data.result;
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

export const KTLoginLog = async (body) => {
    try {
        const response = await api.post(path + "/third-party/kt-login", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const KTCommandLog = async (body) => {
    try {
        const response = await api.post(path + "/third-party/kt/command", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const weekReport = async (body) => {
    try {
        const response = await api.post(path + "/report", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}