import axios from "axios";

const API_URL = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API_URL;
// export const api = " http://localhost:3001/LightCone";