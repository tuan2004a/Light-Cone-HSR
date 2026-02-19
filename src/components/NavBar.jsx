import React from 'react';
import useLightConeStore from '../store/LightConeStore';

const Navbar = ({ItemData}) => {

    
    if(!ItemData)return null;

    return (
        <div className='flex items-center justify-between'>
            <div>
                <img src={null} alt={null} />
                <div>
                    <h3 className='tracking-wider leading-normal text-[#e5ca94] font-medium'>Nón ánh sáng nhân vật</h3>
                    <span className='flex font-medium text-xl leading-normal'>
                        <p>{ItemData.path?.type}</p>
                        <span className='rotate-20 mx-1.5'>
                            /
                        </span>
                        <p>
                            {ItemData.name}
                        </p>
                    </span>
                </div>
            </div>
            <button className='opacity-30 cursor-not-allowed'>
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="2" fill="#D9D9D9"/>
                    <line x1="0.353553" y1="0.646447" x2="9.54594" y2="9.83883" stroke="white"/>
                    <line x1="16.6464" y1="9.83883" x2="25.8388" y2="0.646446" stroke="white"/>
                    <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 25.1924)" stroke="white"/>
                    <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 17 16)" stroke="white"/>
                </svg>
            </button>
        </div>
    )
}

export default Navbar
