import Head from "next/head";
import Link from "next/link";

//css
import reuse from "../styles/home.module.css";
import styles from "../styles/search.module.css";

//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Search() {
    return (
        <div className={reuse.wrapper}>

            <Head>
                <title>Search</title>
            </Head>

            <Header searchBar={true}/>

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

            <Footer />
        </div>
    )
}