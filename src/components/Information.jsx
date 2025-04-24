import React from 'react';
import useLightConeStore from '../store/LightConeStore';

const Information = () => {
    const selecLightCone = useLightConeStore((state) => state.selecLightCone)

    if(!selecLightCone)return null;

    return (
        <div className='h-full flex flex-col'>
            <header>
                <h1 className='text-2xl font-semibold mb-3 line-clamp-1'>{selecLightCone.name}</h1>
                <span className='flex items-center justify-start space-x-1 bg-white/7 w-full p-px'>
                    <img className='size-7' src={selecLightCone.path.icon} alt={selecLightCone.path.type} />
                    <p className='leading-none text-lg font-medium block'>{selecLightCone.path.type}</p>
                </span>
                <div className='flex items-center justify-between mt-2 mb-5 relative after:absolute after:w-full after: after:-bottom-2 after:h-1 after:bg-white/30'>
                    <span className='text-[22px] font-medium'>Lv {selecLightCone.level}</span>
                    <div className='block space-x-2.5'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </header>
            <nav>
                <ul>
                <li className='bg-black/15 flex items-center justify-between p-0.5'>
                    <span className='text-lg font-medium ml-2 flex items-center'>
                            <img className='size-5 mr-1' src={selecLightCone.stats.HP.icon || null} alt={selecLightCone.stats.HP.type} />
                            {selecLightCone.stats.HP.type}
                    </span>
                    <p className='text-xl font-medium mr-1'>{selecLightCone.stats.HP.hp}</p>
                </li>
                <li className='bg-white/5 flex items-center justify-between p-0.5'>
                    <span className='text-lg font-medium ml-2 flex items-center'>
                            <img className='size-5 mr-1' src={selecLightCone.stats.ATK.icon || null} alt={selecLightCone.stats.ATK.type} />
                            {selecLightCone.stats.ATK.type}
                    </span>
                    <p className='text-xl font-medium mr-1'>{selecLightCone.stats.ATK.atk}</p>
                </li> 
                <li className='bg-black/15 flex items-center justify-between p-0.5'>
                    <span className='text-lg font-medium ml-2 flex items-center '>
                            <img className='size-5 mr-1' src={selecLightCone.stats.DEF.icon} alt={selecLightCone.stats.DEF.type} />
                            {selecLightCone.stats.DEF.type}
                    </span>
                    <p className='text-xl font-medium mr-1'>{selecLightCone.stats.DEF.def}</p>
                </li> 
                </ul>
            </nav>
            <aside className=" mt-4 h-auto">
                <p className='capitalize text-[21px] text-zinc-300 font-medium block relative after:absolute after:top-1/2 after:right-0 after:translate-y-[-50%] after:h-[2.5px] after:w-27 after:bg-gray-400/50'>
                    Kỹ năng nón ánh sáng
                </p>
                <span className='flex items-start space-x-2 mt-3'>
                    <img className='size-6 mt-0.5 rounded-full bg-black outline-2 outline-offset-2 outline-black' src={selecLightCone.path.icon} alt={selecLightCone.path.type} />
                    <p className='text-lg leading-normal'>Hiệu ứng này chỉ có hiệu lực với nhận vật Vận Mệnh <strong className='font-medium text-[#c58639]'>{selecLightCone.path.type}</strong></p>
                </span>
                <span className='text-[#cdb88b] mt-3 flex items-center space-x-1.5 font-medium text-lg'>
                    <div className='size-6 bg-[#282828] rounded-full flex items-center justify-center'>I</div>
                    <p>Tích tầng bậc {selecLightCone.superimposition}</p>
                </span>
                <p className='text-[#18ffcb] overflow-y-scroll custom-scrollbar mt-1 h-58 text-lg font-medium '>
                    {selecLightCone.decsLightCone}
                </p>
            </aside>
        </div>
    )
}

export default Information
