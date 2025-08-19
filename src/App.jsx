import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Information from "./components/Information";
import Toolbar from "./components/Toolbar";
import Index from "./page/Index";

function App() {

    return (
        <div className="min-w-screen h-full bg-no-repeat bg-center bg-cover bg-[url('/bg-galaxy-dark.png')] fixed cursor-default px-10 text-white flex flex-col justify-center ">
            <div>
                <Index/>
            </div>
        </div>
    )
}

export default App
