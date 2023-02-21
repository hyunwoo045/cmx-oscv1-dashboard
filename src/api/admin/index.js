import api from "../api";

const path = "/api/admin";

export const getUser = async (userId, password) => {
    const response = await api.post(path + "/getuser", {userId, password});
    return response.data;
}

export const login = async (userId, password) => {
    const response = await api.post(path + "/login", {userId, pw: password});
    return response.data;
}

export const auditLog = async (userId, action, detail) => {
    const response = await api.post(path + "/auditlog", {userId, action, detail});
    return response.data;
}

export const logout = async () => {
    await api.get(path + "/logout");
}

export const lastLogin = async (userId, password) => {
    const response = await api.post(path + "/lastlogin", {userId, password});
    return response.data;
}

export const validate = async (userId, pw) => {
    const response = await api.post(path + "/validate", {userId, pw});
    return response.data;
}

export const changePassword = async (userId, password) => {
    const response = await api.post(path + "/chpw", {userId, "NewPassword": password});
    return response.data;
}

export const getAllUser = async () => {
    const response = await api.get(path + "/getalluser");
    return response.data.result;
}

export const signup = async (body) => {
    const response = await api.post(path + "/signup", body);
    return response.data.result;
}

export const modify = async (body) => {
    const response = await api.post(path + "/modify", body);
    return response.data.result;
}

export const delUser = async (body) => {
    const response = await api.post(path + "/delete", body);
    return response.data.result;
}