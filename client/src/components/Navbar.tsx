import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css"
import { FaXmark } from "react-icons/fa6";
import SocilaMedia from "./SocilaMedia";



export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  function showMenuHandle() {
    setShowMenu((ps) => !ps)
  }


  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1 className={styles.navbarTitle}>Drosos Drosinakis</h1>
        <button onClick={showMenuHandle} className={styles.navbarMenu}>{showMenu ? <FaXmark size={22} /> : <FaBars size={22} />}</button>
      </div>

      <nav className={`${styles.navbarNavigation} ${showMenu && `${styles.navbarNavigationShow}`}`}>
        <a className={styles.navbarNavigationItem} href="#about">About me</a>
        <a href="#projects" className={styles.navbarNavigationItem}>My Projects</a>
        <SocilaMedia />

      </nav>
    </div >
  )
}

