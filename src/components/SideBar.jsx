import { useState } from "react"

const SideBar = ({ ItemData,onSelectItem }) => {
    return (
        <div onClick={() => onSelectItem(ItemData)} className='overflow-hidden rounded-full size-15 pl-1 bg-[#e2ac58] z-20'>
            <img className='size-15 rounded-full object-cover object-center' src={ItemData.bgLightCone} alt={null} />
        </div>
    )
}

export default SideBar