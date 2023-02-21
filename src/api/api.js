import axios from "axios";
import properties from "../config/properties";


export default axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});