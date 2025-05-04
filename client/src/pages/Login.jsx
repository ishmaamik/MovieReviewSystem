import { useEffect, useState } from "react"
import styles from "../css/profile.module.css"
import { useParams } from "react-router-dom"
import LoginBar from "../components/Login/LoginBar"

const Login=()=>{
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
      // Set isVisible to true after the component has mounted to trigger the fade-in transition
      setIsVisible(true);
    }, []);
    return(
        <>
        
         <div className={`${styles.profile} ${isVisible ? styles.visible : ""}`}>
            <LoginBar/>
        </div>
        
        </>
    )
}

export default Login