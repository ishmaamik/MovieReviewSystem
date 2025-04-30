
import styles from "../css/profilebar.module.css"
import image from "../assets/User.jpg"
const ProfileBar=()=>{
    return(
        <>
            <div className={styles["container"]}>
                <img src={image} className={styles["circle"]}/>
                <div className={styles["centered"]}>
                    <h3>Ishmaam Iftekhar</h3>
                    <h3>Join Date: 30/04/2025</h3>    
                </div>
                
                
            </div>
        </>
    )
}

export default ProfileBar