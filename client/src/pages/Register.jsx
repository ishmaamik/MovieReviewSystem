import { useEffect, useState } from "react"
import styles from "../css/profile.module.css"
import RegisterBar from "../components/Register/RegisterBar"

const Register=()=>{
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
      // Set isVisible to true after the component has mounted to trigger the fade-in transition
      setIsVisible(true);
    }, []);
    return(
        <>
        
         <div className={`${styles.profile} ${isVisible ? styles.visible : ""}`}>
            <RegisterBar/>
        </div>
        
        </>
    )
}

export default Register