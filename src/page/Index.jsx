//index.jsx
import Navbar from "../components/Navbar";
import LightCone from "../components/SideBar";
import Button from "../components/common/Button";
import { LightConeProvider, useLightConeContext } from "../context/LightConeContext";
import Card from '../components/Card'
import Information from "../components/Information";
import { useState } from "react";
import ShowBgCard from "../components/ShowBgCard";
import useOpenBgCard from "../hooks/useOpenBgCard";


const IndexContext = () => {

    const {isOpenBgCard, setIsOpenBgCard, handleOpenBgCard, handleClostBgCard } = useOpenBgCard();

    const { lightCone } = useLightConeContext();
    const lightConeData = lightCone.data || []

    const [selectItem, setSelectItem] = useState([]);

    const handleShowBgCard = () => {
        handleOpenBgCard();
    }

    return (
        <div className="size-full">
            <header className="capitalize py-3">
                <Navbar ItemData={selectItem}/>
            </header>
            <main className="flex items-center justify-between overflow-hidden">
                {/* <nav className="w-[330px] h-160 custom-scrollbar-sidbar-char space-y-4  overflow-scroll"> */}
                <nav className="w-[330px] h-full custom-scrollbar-sidbar-char space-y-4 is-vertically-scrollable">
                    {lightConeData.length > 0 && lightConeData.map((items, index) => (
                        <LightCone keyIndex={index} ItemData={items} onSelectItem={(selected) => setSelectItem(selected)} />
                    ))}
                </nav>
                <section className="flex items-center justify-center h-full">
                    <Card ItemData={selectItem}/>
                </section>
                <section className="w-[330px]">
                    <Information ItemData={selectItem}/>
                </section>
            </main>
            <div className='flex items-center justify-between'>
                <div>
                    <Button className="size-10 hidden">
                        <i className="fa-solid fa-grid-2 text-xl text-black"></i>
                    </Button>
                </div>
                <div className='flex items-center space-x-7'>
                    <div>
                        <Button onClick={()=>handleShowBgCard()} className="size-10">
                            <i className="fa-solid fa-magnifying-glass text-black text-lg"></i>
                        </Button>
                    </div>
                    <div>
                        <Button className="Text-Shadow !bg-black/50 !text-[#4ce7fe] w-[330px] h-[45px] !text-[18px] after:!border-0">
                            Đã đạt đến bậc cao nhất
                        </Button>
                    </div>
                </div>
            </div>

            <div className={`${isOpenBgCard == true ? "block" : "hidden"} absolute z-[100] size-full inset-0 bg-no-repeat bg-center bg-cover bg-[url('/bg-galaxy.jpg')]`}>
                <ShowBgCard ItemData={selectItem} />
                
                <button onClick={handleClostBgCard} className="absolute top-5 right-10">
                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="2" fill="#D9D9D9"/>
                        <line x1="0.353553" y1="0.646447" x2="9.54594" y2="9.83883" stroke="white"/>
                        <line x1="16.6464" y1="9.83883" x2="25.8388" y2="0.646446" stroke="white"/>
                        <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 25.1924)" stroke="white"/>
                        <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 17 16)" stroke="white"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

const Index = () => {
    return (
        <LightConeProvider>
            <IndexContext/>
        </LightConeProvider>
    )
}
export default Index;