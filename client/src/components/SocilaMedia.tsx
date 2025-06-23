import styles from "./navbar.module.css"
import { FaEnvelope, FaGithub } from "react-icons/fa";



export default function SocilaMedia() {
  return (
    <>
      <a className={styles.navbarNavigationItem} href="https://github.com/xaosmaker" target="_blank">
        <FaGithub />
      </a>
      <a className={styles.navbarNavigationItem} href="mailto:drososD@proton.me"><FaEnvelope /></a>
    </ >
  )
}

