import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import LightConeSlices from "../store/slices/LightConeSlices";

export const LightConeContext = createContext(null);

const initialState = {
    lightCone: [],
}

export const LightConeProvider = ({ children }) => { 
    const [state, setState] = useState(initialState);
    const [lightCone, setLightCone] = useState([]);

    const fetchsLightConeRef = useRef(null);


    const loadLightCone = useCallback(async () => {
        try {
            const data = await LightConeSlices.fetchLightCone();
            setLightCone(data);
            return data
        } catch (error) {
            console.log(error)
            throw error
        }
    })

    useEffect(() => {
        if (!fetchsLightConeRef.current) {
            fetchsLightConeRef.current = true;
            loadLightCone();
        }
    },[loadLightCone])

    const contextValue = useMemo(() => ({
        lightCone,
        loadLightCone,
    }), [lightCone, loadLightCone]);

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