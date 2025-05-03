import { useEffect, useState } from "react"
import DetailsBar from "../components/DetailsBar"
import FriendsBar from "../components/FriendsBar"
import ProfileBar from "../components/ProfileBar"
import styles from "../css/profile.module.css"

const MyProfile=()=>{
    const [isVisible, setIsVisible] = useState(false)
    

    useEffect(() => {
      // Set isVisible to true after the component has mounted to trigger the fade-in transition
      setIsVisible(true);
    }, []);
    return(
        <>
         <div className={`${styles.profile} ${isVisible ? styles.visible : ""}`}>
            <ProfileBar/>
            <DetailsBar/>
            <FriendsBar/>
        </div>
        </>
    )
}

export default MyProfile