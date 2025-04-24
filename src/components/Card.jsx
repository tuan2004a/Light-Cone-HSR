import React from 'react';
import useLightConeStore from '../store/LightConeStore';
const Card = () => {

    const selecLightCone = useLightConeStore((state) => state.selecLightCone)

    // console.log(selecLightCone)
    if(!selecLightCone)return null;

    return (
        <div className='flex items-center space-x-10'>
            <div  className='relative w-[307px] h-[430px] rotate-5'>
                <div className=' absolute z-10 w-[307px] h-[430px] bg-white/13 top-0 left-0 after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]'></div>
                <div className='absolute z-20 w-[307px] -translate-x-5.5 -translate-y-5 '>
                    <img className='size-full object-cover' src={selecLightCone.bgLightCone} alt={selecLightCone.name} />
                </div>
                <div className='absolute z-30 w-[307px] h-[430px] bg-white/13 top-0 left-0 -translate-x-11.5 -translate-y-12  after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]'>
                    
                </div>
            </div>
        </div>
    )
}

export default Card
