import { useEffect, useState } from "react";
import styles from "../css/profile.module.css";



const DetailsBar = () => {
  const [user, setUser]= useState({})

  const list = [
    { "Username": user.userName },
    { "Email": user.email },
    { "Favorite Actor": user.favoriteActor },
    { "Favorite Actress": user.favoriteActress },
    { "Favorite Movie": user.favoriteMovie },
    { "Favorite Genre": user.favoriteGenre },
  ];

  const fetchData=async()=>{
    const data= await fetch("http://localhost:8080/api/users/ishu")
    const json= await data.json()
    setUser(json)
  }

  useEffect(()=>{
    fetchData()  
  }, [])

  return (
    <div className={styles["container"]}>
      
      <div className={styles["details-list"]}>
        {list.map((p, index) => {

          const[key, value]= Object.entries(p)[0]
          return (
            <>
            <span key={index} className={styles["details"]}>
              {key}
            </span>
            <span key={index} className={styles["fields"]}>
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
