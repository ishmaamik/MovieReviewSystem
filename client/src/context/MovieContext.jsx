import { createContext, useEffect, useState } from "react"


export const MovieContext=createContext();

export const MovieProvider=({children, movieURL})=>{

    const [movie, setMovie]= useState({})

    const FetchMovie=async()=>{
        const data= await fetch(`http://localhost:8080/api/movies/title/${movieURL}`)
        const json= await data.json()
        setMovie(json)
        localStorage.setItem("movie", JSON.stringify(json))
    }

    useEffect(()=>{
        FetchMovie()
    }, [movieURL])

    return(
        <MovieContext.Provider value={{movie, setMovie}}>
            {children}
        </MovieContext.Provider>
    )
}