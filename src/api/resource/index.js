import api from '../api';
import {handleResponseError} from "../../common";

const path = "/api/resources"

export const getModelNames = async () => {
    try {
        const response = await api.get(path + "/model-name");
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }

}

export const getSubDevice = async (userId) => {
    try {
        const response = await api.get(path + "/sub-device", {params: {userId}});
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}

export const getGatewaysLog = async (body) => {
    try {
        const response = await api.post(path + "/log/gateways", body);
        return response.data.result;
    } catch (error) {
        handleResponseError(error);
        return null;
    }
}