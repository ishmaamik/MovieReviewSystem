import DetailsBar from "../components/DetailsBar"
import ProfileBar from "../components/ProfileBar"
import styles from "../css/profile.module.css"

const MyProfile=()=>{
    return(
        <>
        <div className={styles["profile"]}> 
            <ProfileBar/>
            <DetailsBar/>
        </div>
        </>
    )
}

export default MyProfile