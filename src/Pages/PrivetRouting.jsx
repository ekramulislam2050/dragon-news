import { useContext } from "react";
import { authContext } from "../HomeLayout/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

 

const PrivetRouting = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location = useLocation()
    console.log(location);
    if(loading){
         return <Loading></Loading>
    }
    if(user && user?.email){  
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>  
};

export default PrivetRouting;