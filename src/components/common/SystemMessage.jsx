import gsap from 'gsap';
import { useEffect, useRef } from 'react';


const SystemMessage = ({ isOpenNoticeCard }) => {

    const cardRef = useRef(null);

    useEffect(() => {
        if (isOpenNoticeCard == true) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );

            gsap.to(
                cardRef.current,
                { opacity: 0, y: -30, duration: 0.5, delay: 4, ease: 'power3.out' },
            );
        }
    },[isOpenNoticeCard])


    return (
        <div ref={cardRef} className=" bg-neutral-800/93 w-fit px-5 py-[5px] leading-normal rounded-md font-medium text-[17px]">
            Tính năng sẽ sớm có mặt
        </div>
    )
}

export default SystemMessage
