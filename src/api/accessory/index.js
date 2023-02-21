import api from '../api';

const path = "/api/accessory";

export const getKTDeviceList = async (body) => {
    const response = await api.post(path + "/ktdevice", body);
    return response.data.result[0];
}

export const getKTHomeList = async (body) => {
    const response = await api.post(path + "/kt", body);
    return response.data.result[0];
}