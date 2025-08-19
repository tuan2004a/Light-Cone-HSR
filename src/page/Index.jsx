//index.jsx
import Navbar from "../components/Navbar";
import LightCone from "../components/SideBar";
import Button from "../components/common/Button";
import { LightConeProvider, useLightConeContext } from "../context/LightConeContext";
import Card from '../components/Card'
import Information from "../components/Information";
import { useState } from "react";


const IndexContext = () => {

    const { lightCone } = useLightConeContext();
    const lightConeData = lightCone.data || []

    const [selectItem, setSelectItem] = useState([]);
    // console.log(selectItem)

    return (
        <div className="size-full">
            <header className="capitalize py-3">
                <Navbar ItemData={selectItem}/>
            </header>
            <main className="flex items-center justify-between overflow-hidden">
                <nav className="w-[330px] h-160 custom-scrollbar-sidbar-char space-y-4  overflow-scroll">
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
                    <Button className="size-10">
                        <i className="fa-solid fa-grid-2 text-xl text-black"></i>
                    </Button>
                </div>
                <div className='flex items-center space-x-7'>
                    <div>
                        <Button className="size-10">
                            <i className="fa-solid fa-magnifying-glass text-black text-lg"></i>
                        </Button>
                    </div>
                    <div>
                        <Button className="!bg-black/65 !text-[#4ce7fe] w-[330px] h-[45px] !text-[18px] after:!border-0">
                            Đã đạt đến bậc cao nhất
                        </Button>
                    </div>
                </div>
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