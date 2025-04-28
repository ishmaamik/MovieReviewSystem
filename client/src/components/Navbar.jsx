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
    url: "/LipiKotha",
  },
  {
    id: 3,
    title: "Popular Movies",
    url: "/EkusheAI",
  },
  {
    id: 4,
    title: "My Profile",
    url: "/collab",
  },
  {
    id: 5,
    title: "WatchList",
    url: "/blog",
  },
  {
    id: 6,
    title: "FavoriteList",
    url: "/protected",
  },
  {
    id: 7,
    title: "MyReviews",
    url: "/pdf",
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
