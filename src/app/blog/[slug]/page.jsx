import Image from "next/image";
import styles from "./singleBlog.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/contact.png" alt="img" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.details}>
                    <Image src="/contact.png" alt="user-img" width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>John Snow</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur maxime odio voluptatibus vel dolorem quam minus, sint earum similique quos non assumenda. Deleniti, maiores ipsa distinctio aspernatur placeat adipisci.
            </div>
            </div>
        </div>
    )
}

export default SinglePostPage;