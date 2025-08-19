import gsap from 'gsap';
import { useEffect, useRef } from 'react';


const ShowBgCard = ({ ItemData, isOpenBgCard }) => {

    const cardRef = useRef(null);

    useEffect(() => {
        if (isOpenBgCard === true) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, scale: 1.12}, // trạng thái ban đầu
                { opacity: 1,x: 0, scale: 1, duration: 0.3, ease: 'power3.out' } // trạng thái cuối
            );
        }
    }, [isOpenBgCard]);


    return (
        <div ref={cardRef} className="bg-white/0.1 backdrop-blur-xl size-full flex justify-center select-none">
            <img className="h-full !w-fit z-10" src={ItemData.bgLightCone} alt={ItemData.name} />
        </div>
    )
}

export default ShowBgCard
