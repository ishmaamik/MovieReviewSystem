import {Link} from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import styles from "../css/navbar.module.css";
import DarkModeToggle from "./Mode";
import { UserContext } from "../context/UserContext";


const Navbar = () => {
  const [user, setUser] = useState(null);  // Initially set to null

  // Fetch user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Get user from localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the stored string back into an object
    }
  }, []);

 const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Popular TV Shows",
    url: "/tvShows",
  },
  {
    id: 3,
    title: "Popular Movies",
    url: "/movies",
  },
  {
    id: 4,
    title: "My Profile",
    url: `/MyProfile/${user?.userName}`,
  },
  {
    id: 5,
    title: "WatchList",
    url: "/watchList",
  },
  {
    id: 6,
    title: "FavoriteList",
    url: "/favoriteList",
  },
  {
    id: 7,
    title: "MyReviews",
    url: "/reviews",
  },
  
];

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
      CineMatic
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} to={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Navbar;
