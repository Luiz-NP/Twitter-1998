import Head from "next/head";
import Image from "next/image";

//css
import styles from "../styles/home.module.css";

//images
import icon1 from "../public/images/icons/icon1.png";
import ungroupImg from "../public/images/ungroup.png";
import homeIcon from "../public/images/home.png";
import searchIcon from "../public/images/search.png";
import notificationIcon from "../public/images/notifications.png";
import messageIcon from "../public/images/message.png";

//components
import { Card } from "../components/Card";
import { Post } from "../components/Post";

export default function Home() {
  return (
    <div className={styles.wrapper}>

      <Head>
        <title>Home</title>
      </Head>

      <header className={styles.header}>
          <Image
           src={icon1}
           />
        <button className={styles.ungroupButton}>
          <Image src={ungroupImg} />
        </button>
      </header>

      <Card />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      <footer className={styles.footer}>
        <ul>
          <li>
            <button>
              <Image 
               src={homeIcon} 
               width={36} 
               height={36}
              />
            </button>
          </li>
          <li>
            <button>
              <Image 
               src={searchIcon}
               width={36} 
               height={36}
              />
            </button>
          </li>
          <li>
            <button>
              <Image 
               src={notificationIcon}
               width={36} 
               height={36}
              />
            </button>
          </li>
          <li>
            <button>
              <Image 
               src={messageIcon} 
               width={36} 
               height={36}
              />
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
}
