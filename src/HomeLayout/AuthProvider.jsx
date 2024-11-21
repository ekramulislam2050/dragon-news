import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../public/firebase";
 
 export const authContext=createContext()
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // console.log(loading,user)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const login = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const authInfo={
          user,
          setUser,
          createUser,
          logOut,
          login,
          loading,
          updateUserProfile
    }
    useEffect(()=>{
        const unSubsCriber = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{  
            unSubsCriber()
        }
    },[])
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;