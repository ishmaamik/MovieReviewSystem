"use client";

import {Link} from "react-router-dom";
import React from "react";
import styles from "../css/navbar.module.css";
import DarkModeToggle from "./Mode";

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
    url: "/profile/:id",
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

const Navbar = () => {

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
