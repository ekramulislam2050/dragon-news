import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"
import { useContext } from "react";
import  { authContext } from "../HomeLayout/AuthProvider";
const Navbar = () => {
    const {user,logOut}=useContext(authContext)
    return (
        <div className="flex items-center justify-between w-11/12 py-4 mx-auto">
            <div>{user && user.email}</div>
            <div className="flex space-x-5 navLink">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="flex items-center space-x-4 login">
                 {
                    user && user?.email?<div className="flex flex-col items-center pt-2">
                    <img src={user.photoURL} className="w-[50px]  rounded-full" />
                    <p>{user.displayName}</p>
                 </div>:<div>
                    <img src={userLogo}  />
                 </div>
                 }
                 
                 <div>
                    {
                        user && user?.email?
                        (
                            <button className="text-white bg-black rounded-none btn" onClick={logOut}>Log out</button>
                        ):(
                            <Link to={"/auth/login"} className="text-white bg-black rounded-none btn">Login</Link>
                        )
                    }
                 </div>
               
            </div>
        </div>
    );
};

export default Navbar;