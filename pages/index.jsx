import Head from "next/head";

//css
import styles from "../styles/home.module.css";

//components
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Post } from "../components/Post";
import { Footer } from "../components/Footer";
import { AsideMenu } from "../components/AsideMenu";

export default function Home() {
  return (
    <div className={styles.wrapper}>

      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <div className={styles.main}>
        <div className={styles.asideMenu}>
          <AsideMenu />
        </div>
        <div className={styles.content}>
          <Card />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

          

      <Footer />
    </div>
  );
}
