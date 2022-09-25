import Head from "next/head";
import { useEffect, useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";

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
  const [tweets, setTweets] = useState([]);
  const [sentTweet, setSentTwitter] = useState(false);

  useEffect(() => {
    axios.get("/api/getAllTweets").then(res => {
        setTweets(res.data.tweets);
      });
  }, [sentTweet]);

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
          <Card setSentTwitter={setSentTwitter} />
          
            {tweets?.map(tweet => (
              <Post name={tweet.ownerName} username={tweet.ownerUsername} content={tweet.content}/>
            ))}

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