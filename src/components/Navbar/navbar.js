import React from "react";
import styles from "./navbar.module.css";
import ImageDashboard from "../../images/DashboardSVG.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={ImageDashboard} height={40} width={32} />
        <p>Dashboard</p>
      </div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.nav}>
          Početna
        </a>
        <a href="#" className={styles.nav}>
          O Nama
        </a>
        <a href="#" className={styles.navButton}>
          Kontakt
        </a>
      </div>
    </div>
  );
};

export default Navbar;
