import api from '../api';

const path = "/api/resources"

export const getModelNames = async () => {
    const response = await api.get(path + "/model-name");
    return response.data.result;
}

export const getSubDevice = async (userId) => {
    const response = await api.get(path + "/sub-device", {params: {userId}});
    if (response.data.success) {
        return response.data.result;
    } else {
        alert(response.data.error);
    }
}

export const getGatewaysLog = async (body) => {
    const response = await api.post(path + "/log/gateways", body);
    if (response.data.success) return response.data.result;
}