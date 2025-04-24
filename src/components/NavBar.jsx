import React from 'react';
import useLightConeStore from '../store/LightConeStore';

const Navbar = () => {

    const selecLightCone = useLightConeStore((state) => state.selecLightCone)
    
    if(!selecLightCone)return null;

    return (
        <div className='flex items-center justify-between'>
            <div>
                <img src={null} alt={null} />
                <div>
                    <h3 className='tracking-wider leading-normal text-[#e5ca94] font-medium'>Nón ánh sáng nhân vật</h3>
                    <span className='flex font-medium text-xl leading-normal'>
                        <p>{selecLightCone.path.type}</p>
                        <span className='rotate-20 mx-1.5'>
                            /
                        </span>
                        <p>
                            {selecLightCone.name}
                        </p>
                    </span>
                </div>
            </div>
            <button>
                x
            </button>
        </div>
    )
}

export default Navbar
