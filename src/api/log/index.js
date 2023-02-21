import api from "../api";

const path = "/api/logs";

export const auditLog = async (userId) => {
    const response = await api.post(path + "/auditlog", {userId});
    return response.data.result;
}

export const wallpadLoginLog = async (body) => {
    const response = await api.post(path + "/wallpad/login", body);
    return response.data;
}

export const wallpadRegisterLog = async (body) => {
    const response = await api.post(path + "/wallpad/register", body);
    if (response.data.success) return response.data.result;
}

export const initLog = async (userId) => {
    const response = await api.get(path + "/init", {params: {member_id: userId}});
    if (response.data.success) {
        return response.data.result[0];
    } else alert(response.data.error);
}

export const reportLog = async (body) => {
    const response = await api.post(path + "/report", body);
    if (response.data.success) return response.data.result[0];
    else alert(response.data.error);
}

export const userRegisterLog = async (body) => {
    const response = await api.post(path + "/user/register", body);
    if (response.data.success) return response.data.result;
}

export const loginQueryLog = async(body) => {
    console.log(body);
    const response = await api.post(path + "/login-query", body);
    if (response.data.success) return response.data.result;
}

export const commandLog = async (body) => {
    const response = await api.post(path + "/command", body);
    return response.data.result;
}

export const KTLoginLog = async (body) => {
    const response = await api.post(path + "/third-party/kt-login", body);
    if (response.data.success) return response.data.result;
}

export const KTCommandLog = async (body) => {
    const response = await api.post(path + "/third-party/kt/command", body);
    if (response.data.success) return response.data.result;
}

export const weekReport = async (body) => {
    const response = await api.post(path + "/report", body);
    if (response.data.success) return response.data.result;
}