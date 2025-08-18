import { useCallback, useContext, useMemo } from "react";
import LightConeSlice from "../store/slices/LightConeSlices";

export const LightConeContext = createContext(null);

const initialState = {
    lightCone: [],
}

export const LightConeProvider = ({ children }) => { 
    const loadLightCone = useCallback(async () => {

    })

    const contextValue = useMemo(() => ({
        loadLightCone,
    }), [loadLightCone])

    return (
        <LightConeContext.Provider value={contextValue}>
            {children}
        </LightConeContext.Provider>
    )

}

export const useLightConeContext = () => {
    const context = useContext(LightConeContext);
    if (!context) throw new Error('useLightConeContext must be used within a LightConeProvider');
    return context;
};