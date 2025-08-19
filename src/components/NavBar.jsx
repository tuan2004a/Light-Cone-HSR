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
            <button>
                x
            </button>
        </div>
    )
}

export default Navbar
