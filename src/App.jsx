import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Information from "./components/Information";
import Toolbar from "./components/Toolbar";
import useLightConeStore from "./store/LightConeStore";


function App() {

    useLightConeStore()

    return (
        <div className="min-w-screen h-full bg-no-repeat bg-center bg-cover bg-[url('/bg-galaxy.jpg')] fixed px-10 text-white flex flex-col justify-center ">
            <header className="capitalize py-3">
                <Navbar />
            </header>
            <main className="flex items-start justify-between overflow-hidden">
                <nav className="w-[330px]">
                    <SideBar />
                </nav>
                <section className="flex items-center justify-center h-full">
                    <Card />
                </section>
                <section className="w-[330px]">
                    <Information/>
                </section>
            </main>
            <div className="py-3 ">
                <Toolbar/>
            </div>
        </div>
    )
}

export default App
