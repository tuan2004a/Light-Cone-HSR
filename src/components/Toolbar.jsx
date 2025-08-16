const Toolbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <button className='size-10 bg-white rounded-full relative after:absolute after:inset-1/2 after:-translate-1/2 after:size-[75%] after:rounded-full after:border-2 after:border-gray-300'>
                    <i className="fa-solid fa-grid-2 text-xl text-black"></i>
                </button>
            </div>
            <div className='flex items-center space-x-7'>
                <div>
                    <button  className='size-10 bg-white rounded-full relative after:absolute after:inset-1/2 after:-translate-1/2 after:size-[75%] after:rounded-full after:border-2 after:border-gray-300'>
                        <i className="fa-solid fa-magnifying-glass text-black text-lg"></i>
                    </button>
                </div>
                <div className='w-[330px] grid grid-cols-2 text-black gap-4'>
                    <button className='bg-[#e0e0e2] rounded-full font-semibold text-lg leading-normal w-full h-[45px] relative after:absolute after:inset-1/2 after:-translate-1/2 after:w-[95%] after:h-[85%] after:rounded-full after:border-2 after:border-gray-300'>
                        Đổi
                    </button>
                    <button className='bg-[#e0e0e2] rounded-full font-semibold text-lg leading-normal w-full h-[45px] relative after:absolute after:inset-1/2 after:-translate-1/2 after:w-[95%] after:h-[85%] after:rounded-full after:border-2 after:border-gray-300'>
                        Cường Hóa
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar
