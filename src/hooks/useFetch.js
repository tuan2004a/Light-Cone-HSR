import { useEffect } from 'react';
import api from '../config/api';
import useLightConeStore from '../store/LightConeStore';

const useFetch = (endpoint) => {

    const setLightConeData = useLightConeStore(state => state.setLightConeData ); 
    const setSelectedLightCone = useLightConeStore(state => state.setSelectedLightCone);


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await api.get(endpoint);
                const data = response.data;
                if (data.length > 0) {
                    setLightConeData(data); 
                    setSelectedLightCone(data[0]);         
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        }; 
        fetchData();
    },[endpoint,setLightConeData, setSelectedLightCone])
}

export default useFetch;