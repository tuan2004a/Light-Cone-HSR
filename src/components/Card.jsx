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
    if (!selecLightCone) return null;

    var star = [];
    for(let i = 0; i < selecLightCone.star; i++){
        star.push(
            <svg key={i} width="32" height="32" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 12.5C17.6197 11.4299 13.7822 9.70934 12.5 0C11.2453 7.95344 9.33887 11.3725 0 12C9.13903 13.8179 11.3682 17.1431 12.5 25C13.2628 16.8787 15.8825 14.0538 25 12.5Z" fill="#FDB93B"/>
            </svg>
        )
    }

    return (
        <div className='flex items-center '>
            <div ref={cardRef} className=' relative w-[307px] h-[430px] rotate-5'>
                <div className=' absolute z-10 w-[307px] h-[430px] bg-white/10 top-0 left-0 after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]' style={{clipPath: "polygon(5% 0, 95% 0, 100% 4%, 100% 96%, 95% 100%, 5% 100%, 0 96%, 0 4%)",}}></div>
                <div className=' absolute z-20 w-[307px] -translate-x-5.5 -translate-y-5 '>
                    <img className='size-full object-cover' src={selecLightCone.bgLightCone} alt={selecLightCone.name} />
                </div>
                <div className='absolute z-30 w-[307px] h-[430px] bg-white/10 top-0 left-0 -translate-x-11.5 -translate-y-12  after:absolute after:rounded after:w-[87%] after:h-[90%] after:border-2 after:border-amber-100 after:top-1/2 after:left-1/2 after:translate-[-50%]' style={{clipPath: "polygon(5% 0, 95% 0, 100% 4%, 100% 96%, 95% 100%, 5% 100%, 0 96%, 0 4%)",}}>
                    <div className="absolute bottom-8 left-10 flex items-center space-x-1">
                        <img className="size-7 outline-1 outline-offset-4 rounded-full mr-2" src={selecLightCone.path.icon} alt={null}/>
                        {star}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
