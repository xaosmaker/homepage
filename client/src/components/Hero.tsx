import styles from "./hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>


      <img src="public/ZTS03058.jpg" className={styles.heroImg} alt="an image of me" />

      <p className={styles.heroText}>
        I’m a self-taught fullstack developer, but I didn’t start off with the right mindset.
        At first, I was building things just to say I built them — not to solve problems, not to learn properly. I was chasing quick wins. Eventually, I scrapped my old repos, took a step back, and started again — this time with real focus.
        Now, I’m building clean, working apps using Django with PostgreSQL, and TypeScript with Express for more hands-on control. I’ve done custom authentication, API design, and worked on both sides of the stack — but I love the backend most. That’s where I create the magic.
        Still learning. Still building. But this time, for the right reasons.
      </p>
    </div>
  )
}

