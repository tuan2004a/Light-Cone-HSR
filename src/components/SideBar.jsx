import React from 'react';
import useLightConeStore from '../store/LightConeStore';
import useFetch from '../hooks/useFetch';


const SideBar = () => {
    useFetch('LightCone');
    const lightConeData = useLightConeStore((state) => state.lightConeData); 
    const setSelectedLightCone = useLightConeStore((state) => state.setSelectedLightCone);
    // console.log(setSelectedLightCone)    

    if(!lightConeData) return null;

    return (
        <div className=''>
            <div className='custom-scrollbar-sidbar-char space-y-4 h-160 overflow-scroll w-fit' >
                {lightConeData.map((items) => (
                    <div key={items.id} onClick={() => { setSelectedLightCone(items) }} className='overflow-hidden rounded-full size-15 pl-1 bg-[#e2ac58] z-20'>
                        <img className='size-15 rounded-full object-cover object-center' src={items.bgLightCone} alt={null} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar

