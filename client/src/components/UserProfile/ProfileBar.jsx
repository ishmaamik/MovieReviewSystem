import { useContext, useEffect, useState } from "react";
import styles from "../../css/profilebar.module.css"
import image from "../../assets/User.jpg"
import { UserContext } from "../../context/UserContext";
const ProfileBar=()=>{
    const {user}= useContext(UserContext)
    
    return(
        <>
            <div className={styles["container"]}>
                <img src={user.image} className={styles["circle"]}/>
                <div className={styles["centered"]}>
                    <h3>{user.userName}</h3>
                    <h3>Join Date: 30/04/2025</h3>
                    <div style={{display:"flex", marginRight:"15px"}}>
                        <button style={{border:"none", marginTop:"15px", marginRight:"15px",backgroundColor:"black", color:"yellow", fontSize:"17px"}} onFocus={(e) => e.target.style.outline = 'none'}>Favorite List</button>    
                        <button style={{border:"none", marginTop:"15px", backgroundColor:"black", color:"yellow", fontSize:"17px"}} onFocus={(e) => e.target.style.outline = 'none'}>Watch List</button> 
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default ProfileBar