import { useContext, useEffect, useState } from "react";
import styles from "../../css/loginbar.module.css"
import {Button, TextField} from "@mui/material"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const RegisterBar=()=>{

    const [username, setUserName]= useState("")
    const [password, setPassword]= useState("")

    const {setUser}= useContext(UserContext)
    const navigation= useNavigate();
    const login=async()=>{
        const response= await axios.post("http://localhost:8080/api/users/register",{
            userName: username, password: password
        })

        if (response.status==201){
            localStorage.setItem("user", JSON.stringify(response.data))
            setUser(response.data.userName)
            navigation(`/MyProfile/${username}`)
            
            
        }
    }
    
    return(
        <>
            <div className={styles["container"]}>
                
                <TextField onChange={(e)=>{setUserName(e.target.value)}} style={{backgroundColor:"white", marginTop:"30%", marginLeft:"13%", width:"300px", color:"black"}} label="New Username" ></TextField>
                <TextField onChange={(e)=>{setPassword(e.target.value)}} style={{backgroundColor:"white", marginTop:"5%", marginLeft:"13%", width:"300px", color:"black"}} label="New Password" ></TextField>
                <Button onClick={login} style={{backgroundColor:"black", marginTop:"7%", marginLeft:"33%", width:"150px", color:"white"}}>Register</Button>
                <p style={{color:"black", marginLeft:"19%"}}>Already have an account?, <Link to="/login">login</Link></p>
            </div>
        </>
    )
}

export default RegisterBar