import api from '../api';
import {handleResponseError} from "../../common";

const path = "/api/accessory";

export const getKTDeviceList = async (body) => {
    try {
        const response = await api.post(path + "/ktdevice", body);
        return response.data.result[0];
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getKTHomeList = async (body) => {
    try {
        const response = await api.post(path + "/kt", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}