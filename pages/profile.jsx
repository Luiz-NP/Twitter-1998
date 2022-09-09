import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

export default function Profile() {
    return (
        <div className={reuse.wrapper}>
            <Head>
                <title>Profile Page</title>
            </Head>

            <Header />
                
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
                            Eren Demir
                        </h2>

                        <span className={styles.nickname}>
                            @erendmrv
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

                <Post />
                <Post />
                <Post />

            <Footer />
        </div>
    )
}