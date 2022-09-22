import Head from "next/head";
import { parseCookies, destroyCookie } from "nookies";

//css
import styles from "../styles/home.module.css";

//components
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Post } from "../components/Post";
import { Footer } from "../components/Footer";
import { AsideMenu } from "../components/AsideMenu";
import { TrendCard } from "../components/TrendCard";
import { WhoToFollowCard } from "../components/WhoToFollowCard";

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
        <div className={styles.otherSide}>
          <TrendCard />
          <WhoToFollowCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { 'auth-token': token } = parseCookies(ctx);

  if (!token || token === 'undefined') {
    destroyCookie(ctx, 'auth-token');
      return {
          redirect: {
              destination: '/',
              permanent: false,
          }
      }
  }

  return {
      props: {}
  }
}