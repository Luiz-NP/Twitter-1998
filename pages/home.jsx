import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { AuthContext } from "../contexts/AuthContext";
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
  const { likesInfo, setLikesInfo } = useContext(AuthContext);

  useEffect(() => {
    axios.get("/api/getAllTweets").then(res => {
        setTweets(res.data.tweets);
      });
  }, [sentTweet, likesInfo]);

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
              <Post 
               key={tweet._id}
               userId={tweet.ownerId}
               tweetId={tweet._id} 
               name={tweet.ownerName} 
               username={tweet.ownerUsername} 
               content={tweet.content} 
               setLikesInfo={setLikesInfo} 
               likes={tweet.likes}
              />
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