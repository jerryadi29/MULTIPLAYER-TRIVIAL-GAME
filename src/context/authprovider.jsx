import {useState, createContext } from "react";

export const AuthContext=createContext();

export const AuthProviderComponent=({children})=>{
    const[auth,setauth]=useState({});

    return(
        <>
        <AuthContext.Provider value={{auth,setauth}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}