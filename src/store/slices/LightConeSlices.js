import LightConeService from "../../service/LightConeService";

class LightConeSlices {
    fetchLightCone = async () => { 
        try {
            const result = await LightConeService.getAll();
            return result;
        } catch (error) {
            set({ loading: false, error: error.message || "Lỗi khi tải dữ liệu công việc" });
            console.error("❌ Lỗi fetchWorks:", error);
            throw error;
        }
    }

}

export default LightConeSlices;
