//LightConeSlices.js
import LightConeService from "../../service/LightConeService";
import { create } from "zustand";

const  LightConeSlices = {
    fetchLightCone: async () => { 
        try {
            const result = await LightConeService.getAll();
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export default LightConeSlices;
