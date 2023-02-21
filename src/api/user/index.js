import api from '../api';

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
    const response = await api.post(path + "districtuser", body);
    if (response.data.success) {
        return response.data.result;
    } else alert(response.data.error);
}

export const checkRegistration = async (userId) => {
    const response = await api.get(path + `/resource?userId=${userId}`);
    if (response.data.success) return response.data.result;
}

export const getLogsUserReg = async (body) => {
    const response = await api.post(path + "/log/reg-user", body);
    if (response.data.success) return response.data.result;
}

export const getLogsUserAuth = async (body) => {
    const response = await api.post(path + "/log/auth", body);
    if (response.data.success) return response.data.result;
}

export const getLogsOauth = async (body) => {
    const response = await api.post(path + "/log/oauth", body);
    if (response.data.success) return response.data.result;
}

export const getUserResourceInfo = async (userId) => {
    const response = await api.get(path + `/resource/info?userId=${userId}`);
    if (response.data.success) return response.data.result;
}