import {React, useEffect, useRef} from 'react';
import useLightConeStore from '../store/LightConeStore';
import gsap from 'gsap';
const Card = () => {
    const cardRef = useRef(null);
    const selecLightCone = useLightConeStore((state) => state.selecLightCone);

    useEffect(() => {
        if (selecLightCone) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0,x: 30 }, // trạng thái ban đầu
                { opacity: 1,x: 0, duration: 0.6, ease: 'power3.out' } // trạng thái cuối
            );
        }
    }, [selecLightCone]);

    // console.log(selecLightCone)
    if(!selecLightCone)return null;

    return (
        <div className='flex items-center '>
            <div  className='relative w-[307px] h-[430px] rotate-5'>
                <div className=' absolute z-10 w-[307px] h-[430px] bg-white/10 top-0 left-0 after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]' style={{clipPath: "polygon(5% 0, 95% 0, 100% 4%, 100% 96%, 95% 100%, 5% 100%, 0 96%, 0 4%)",}}></div>
                <div className=' absolute z-20 w-[307px] -translate-x-5.5 -translate-y-5 '>
                    <img className='size-full object-cover' src={selecLightCone.bgLightCone} alt={selecLightCone.name} />
                </div>
                <div className='absolute z-30 w-[307px] h-[430px] bg-white/10 top-0 left-0 -translate-x-11.5 -translate-y-12  after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]' style={{clipPath: "polygon(5% 0, 95% 0, 100% 4%, 100% 96%, 95% 100%, 5% 100%, 0 96%, 0 4%)",}}>
                    
                </div>
            </div>
        </div>
    )
}

export default Card
