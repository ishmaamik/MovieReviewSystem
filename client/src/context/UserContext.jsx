import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserContext= createContext()

export const UserProvider=({children, userName})=>{
    const [user, setUser]= useState(JSON.parse(localStorage.getItem("user")) || {});

    const fetchData=async()=>{
        const data= await axios.get(`http://localhost:8080/api/users/${userName}`,{},
        {
          headers:{
            Authorization: `Basic ${btoa(userName +':' +user.password)}`
          }
        }
      )
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

