import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { parseCookies, destroyCookie } from "nookies";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

//css
import reuse from "../styles/home.module.css";
import styles from "../styles/profile.module.css";

//images
import icon1 from "../public/images/icons/icon1.png";
import locationIcon from "../public/images/location.png"
import calendarIcon from "../public/images/time.png";

//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { AsideMenu } from "../components/AsideMenu";
import { TrendCard } from "../components/TrendCard";
import { WhoToFollowCard } from "../components/WhoToFollowCard";

export default function Profile() {
    const { user } = useContext(AuthContext);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const ownerId = user?._id

        axios.post("/api/getTweetsByUser", { ownerId }).then(res => {
            setTweets(res.data.tweets);
            console.log(tweets)
          });
      }, []);

    return (
        <div className={reuse.wrapper}>
            <Head>
                <title>Profile Page</title>
            </Head>

            <Header />
                
                <div className={reuse.main}>

                <div className={reuse.asideMenu}>
                    <AsideMenu />
                </div>

                    <div className={reuse.content}>
                        <div className={styles.profileCard}>
                            <div className={styles.top}>
                                <Image
                                 src={icon1}
                                 width={132}
                                 height={132}
                                />
                                <Link href="/editProfile">
                                    <button className={styles.editButton}>
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <h2 className={styles.username}>
                                    {user?.name}
                                </h2>
                                <span className={styles.nickname}>
                                    {user?.username}
                                </span>
                            </div>
                            <span className={styles.office}>Front-end Developer at @twitter</span>
                            <div className={styles.information}>
                                <span className={styles.location}>
                                    <Image
                                     src={locationIcon}
                                     width={20}
                                     height={20}
                                    />
                                    Turkey
                                </span>
                                <span className={styles.lastJoin}>
                                    <Image
                                     src={calendarIcon}
                                     width={20}
                                     height={20}
                                    />
                                    Joined on 12 June 2020.
                                </span>
                            </div>
                            <div className={styles.information}>
                                <span className={styles.follow}><strong>181</strong> Following</span>
                                <span className={styles.follow}><strong>321</strong> Followers</span>
                            </div>
                            <ul className={styles.buttons}>
                                <li>
                                    <button>
                                        Tweets
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        Tweets and answers
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        Media
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        Likes
                                    </button>
                                </li>
                            </ul>
                        </div>
<<<<<<< HEAD
                        <Post name={user?.name} username={user?.username}/>

                        {tweets?.map(tweet => (
                            <Post name={tweet.ownerName} username={tweet.ownerUsername} content={tweet.content}/>
                        ))}
=======
                        <Post />
                        <Post />
                        <Post />
>>>>>>> parent of f18b362 (adjustments for rendering)
                    </div>
                    <div className={reuse.otherSide}>
                        <TrendCard />
                        <WhoToFollowCard />
                        </div>
                    </div>

            <Footer />
        </div>
    )
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