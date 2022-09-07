import Head from "next/head";

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
                                <h2>Zinadine Zidane</h2>
                                <span>10,2 B Tweet</span>
                            </div>
                        </li>
                    </ul>
                </main>

            <Footer />
        </div>
    )
}