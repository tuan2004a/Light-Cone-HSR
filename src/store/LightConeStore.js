import { create } from "zustand";

const useLightConeStore = create((set) => ({
    lightConeData: [],
    setLightConeData: (data) => set({ lightConeData: data }),

    selecLightCone: null,
    setSelectedLightCone: (lightCone) => set({ selecLightCone: lightCone }),
}));

export default useLightConeStore;