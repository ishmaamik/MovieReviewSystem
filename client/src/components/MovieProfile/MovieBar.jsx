import { useContext, useEffect, useState } from "react";
import styles from "../../css/moviebar.module.css"
import { MovieContext } from "../../context/MovieContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios"

const MovieBar=()=>{
    const {movie}= useContext(MovieContext)
    const {user}= useContext(UserContext)

    const addToWatchList=async()=>{
        await axios.post('http://localhost:8080/api/users/addWatchList',{
                movieTitle: movie.title,
                userName: user.userName
        }
    )
    }

    return(
        <>
            <div className={styles["container"]}>
                <img src={movie.poster} className={styles["circle"]}/>
                <div className={styles["centered"]}>
                    <h3>{movie.title}</h3>
                    <h3>Release Date: {movie.releaseDate}</h3>
                    <div style={{display:"flex", marginRight:"15px", maxWidth:"300px" }}>
                        <button style={{border:"none", marginTop:"15px", marginRight:"15px",backgroundColor:"black", color:"yellow", fontSize:"17px"}} onFocus={(e) => e.target.style.outline = 'none'}>Add to Favorite List</button>    
                        <button onClick={()=>addToWatchList()} style={{border:"none", marginTop:"15px", backgroundColor:"black", color:"yellow", fontSize:"17px"}} onFocus={(e) => e.target.style.outline = 'none'}>Add to Watch List</button> 
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default MovieBar