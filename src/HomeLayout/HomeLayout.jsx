 
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import LeftNavbar from "../Components/Layout Components/LeftNavbar";
import RightNavbar from "../Components/Layout Components/RightNavbar";
 
import Navbar from "../Components/Navbar";
const HomeLayout = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
            </header>
             <section>
                 <Latest></Latest>
             </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="grid w-11/12 pt-5 mx-auto md:grid-cols-12">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6"> <Outlet></Outlet></section>
                <aside className="col-span-3"> 
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;