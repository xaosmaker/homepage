import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css"



export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  function showMenuHandle() {
    setShowMenu((ps) => !ps)
  }


  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <p className={styles.navbarTitle}>Drosos Drosinakis</p>
        <button onClick={showMenuHandle} className={styles.navbarMenu}><FaBars size={22} /></button>
      </div>

      <nav className={`${styles.navbarNavigation} ${showMenu && `${styles.navbarNavigationShow}`}`}>
        <a className={styles.navbarNavigationItem} href="">link1</a>
        <a href="" className={styles.navbarNavigationItem}>link2</a>

      </nav>
    </div >
  )
}

