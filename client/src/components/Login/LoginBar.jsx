import { useContext, useEffect, useState } from "react";
import styles from "../../css/loginbar.module.css"
import {Button, TextField} from "@mui/material"
import axios from "axios";
import { Link } from "react-router-dom";

const LoginBar=()=>{

    const [username, setUserName]= useState("")
    const [password, setPassword]= useState("")

    const login=async()=>{
        const response= await axios.post("http://localhost:8080/api/users/",{},{
            headers:{
                Authorization:`Basic ${btoa(username+ ":"+ password)}`
            }
        })

        if (response.status==200){
            localStorage.setItem("user", JSON.stringify(response.data.user))
        }
    }
    
    return(
        <>
            <div className={styles["container"]}>
                
                <TextField onChange={(e)=>{setUserName(e.target.value)}} style={{backgroundColor:"white", marginTop:"30%", marginLeft:"13%", width:"300px", color:"black"}} label="Username" ></TextField>
                <TextField onChange={(e)=>{setPassword(e.target.value)}} style={{backgroundColor:"white", marginTop:"5%", marginLeft:"13%", width:"300px", color:"black"}} label="Password" ></TextField>
                <Button onClick={login} style={{backgroundColor:"black", marginTop:"7%", marginLeft:"33%", width:"150px", color:"white"}}>Log In</Button>
                <p style={{color:"black", marginLeft:"19%"}}>New here? No problem, <Link to="/register">register here</Link></p>
            </div>
        </>
    )
}

export default LoginBar