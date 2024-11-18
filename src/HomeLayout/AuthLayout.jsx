import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

 const AuthLayout = () => {
    return (
        <div className="bg-[#f3f3f3] font-Poppins">
             <header className="w-11/12 py-2 mx-auto">
                 <Navbar></Navbar>
             </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;