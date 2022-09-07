import Head from "next/head";

//css
import styles from "../styles/home.module.css";

//components
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Post } from "../components/Post";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.wrapper}>

      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <Card />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      <Footer />
    </div>
  );
}
