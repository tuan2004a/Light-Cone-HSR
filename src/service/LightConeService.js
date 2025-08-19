//LightConeService.js

import axios from 'axios';
import {API_URL} from '../config/api';

class LightConeService { 
    constructor() {
        this.baseUrl = `${API_URL}/LightCone`;
    }

    async getAll() {
        try {

            const response = await axios.get(this.baseUrl);
            // console.log(response)
            return response;
        } catch (error) {
            console.log(error);
        }

    }
}

export default new LightConeService
