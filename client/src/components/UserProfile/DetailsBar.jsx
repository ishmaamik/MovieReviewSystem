import { useContext, useEffect, useState } from "react";
import styles from "../../css/profile.module.css";
import { UserContext } from "../../context/UserContext";



const DetailsBar = () => {
  const {user}= useContext(UserContext)

  const list = [
    { "Username": user.userName },
    { "Email": user.email },
    { "Favorite Actor": user.favoriteActor },
    { "Favorite Actress": user.favoriteActress },
    { "Favorite Movie": user.favoriteMovie },
    { "Favorite Genre": user.favoriteGenre },
  ];

  return (
    <div className={styles["container"]}>
      
      <div className={styles["details-list"]}>
        {list.map((p, index) => {

          const[key, value]= Object.entries(p)[0]
          return (
            <>
            <span  className={styles["details"]}>
              {key}
            </span>
            <span  className={styles["fields"]}>
            {value}
          </span>
          </>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsBar;
