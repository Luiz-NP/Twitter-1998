import Link from "next/link";

//css
import styles from "./styles.module.css";

export function TrendCard() {
    return (
        <main className={styles.trend}>
            <h1 className={styles.title}>Trends for your</h1>

            <ul className={styles.topics}>
                <li>
                    <div>
                        <span>Football</span>
                        <Link href="#">
                            <h2><a>Zinadine Zidane</a></h2>
                        </Link>
                        <span>10,2 B Tweet</span>
                    </div>
                </li>
            </ul>
        </main>
    )
}