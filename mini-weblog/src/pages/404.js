import Link from "next/link"
import styles from "../styles/Error.module.css";

export default function Custom404() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.text}>Route Is Not Exist</p>
            <Link className={styles.link} href="/">Go To Home Page</Link>
        </div>
    )
}