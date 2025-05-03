import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserContext= createContext()

export const UserProvider=({children, userName})=>{
    const [user, setUser]= useState({})

    const fetchData=async()=>{
        const data= await fetch(`http://localhost:8080/api/users/${userName}`)
        const json= await data.json()
        setUser(json)
        localStorage.setItem("user", JSON.stringify(json))
      }
    
      useEffect(()=>{
        fetchData()  
      }, [userName])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

