import styles from "./Nav.module.css";
import React from "react";

function Nav() {
  return (
    <div className={`${styles.Nav}`}>
      <div className="Nav-logo">
        <img src="../../public/Frame 2 1.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
