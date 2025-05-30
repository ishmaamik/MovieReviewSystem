import { useEffect, useState } from "react"
import DetailsBar from "../components/UserProfile/DetailsBar"
import FriendsBar from "../components/UserProfile/FriendsBar"
import ProfileBar from "../components/UserProfile/ProfileBar"
import styles from "../css/profile.module.css"
import { useParams } from "react-router-dom"
import { UserProvider } from "../context/UserContext"

const MyProfile=()=>{
    const [isVisible, setIsVisible] = useState(false)
    const {userName}= useParams()

    useEffect(() => {
      // Set isVisible to true after the component has mounted to trigger the fade-in transition
      setIsVisible(true);
    }, []);
    return(
        <>
        <UserProvider userName={userName}>
         <div className={`${styles.profile} ${isVisible ? styles.visible : ""}`}>
            <ProfileBar/>
            <DetailsBar/>
            <FriendsBar/>
        </div>
        </UserProvider>
        </>
    )
}

export default MyProfile