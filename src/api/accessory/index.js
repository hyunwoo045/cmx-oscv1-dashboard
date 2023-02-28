import api from '../api';
import {handleResponseError} from "../../common";

const path = "/api/accessory";

export const getKTDeviceList = async (body) => {
    try {
        const response = await api.post(path + "/kt/device", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getKTHomeList = async (body) => {
    try {
        const response = await api.post(path + "/kt/home", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getHomeErrHistory = async (homeId) => {
    try {
        const response = await api.get(path + `/kt/home/err?homeId=${homeId}`);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const KTCommandLog = async (body) => {
    try {
        const response = await api.post(path + "/kt/log/acc", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}