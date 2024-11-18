import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-11/12 py-4 mx-auto">
            <div></div>
            <div className="flex space-x-5 navLink">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="flex items-center space-x-4 login">
                 <div>
                    <img src={userLogo}  />
                 </div>
                  <button className="text-white bg-black rounded-none btn">Login</button>
            </div>
        </div>
    );
};

export default Navbar;