import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Padma Dev
      </div>
      <div className={styles.text}>
        Padma creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer