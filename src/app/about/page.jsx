import Image from "next/image"
import styles from "./about.module.css";

const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>we create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae recusandae natus debitis provident, libero accusantium voluptatibus assumenda aut consectetur. Facere possimus voluptates quod non? Exercitationem nisi ex corrupti eos.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div><div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about-img" fill className={styles.img} />
      </div>
    </div>
  )
}

export default Aboutpage