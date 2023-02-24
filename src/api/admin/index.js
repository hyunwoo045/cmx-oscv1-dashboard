import api from "../api";
import {handleResponseError} from "../../common";

const path = "/api/admin";

export const getUser = async (userId, password) => {
    try {
        const response = await api.post(path + "/getuser", {userId, password});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const login = async (userId, password) => {
    try {
        const response = await api.post(path + "/login", {userId, pw: password});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const auditLog = async (userId, action, detail) => {
    try {
        const response = await api.post(path + "/auditlog", {userId, action, detail});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const logout = async () => {
    try {
        await api.get(path + "/logout");
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const lastLogin = async (userId, password) => {
    try {
        const response = await api.post(path + "/lastlogin", {userId, password});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const validate = async (userId, pw) => {
    try {
        const response = await api.post(path + "/validate", {userId, pw});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const changePassword = async (userId, password) => {
    try {
        const response = await api.post(path + "/chpw", {userId, "NewPassword": password});
        return response.data;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getAllUser = async () => {
    try {
        const response = await api.get(path + "/getalluser");
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const signup = async (body) => {
    try {
        const response = await api.post(path + "/signup", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const modify = async (body) => {
    try {
        const response = await api.post(path + "/modify", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const delUser = async (body) => {
    try {
        const response = await api.post(path + "/delete", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const tokenAdmin = async (token) => {
    try {
        const response = await api.get(path + "/token-admin", {
            headers: {
                Authorization: token
            }
        });
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}