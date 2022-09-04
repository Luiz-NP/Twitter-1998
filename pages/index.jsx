import Head from "next/head";
import Image from "next/image";

//css
import styles from "../styles/home.module.css";

//images
import profilePic from "../public/profile.png";
import ungroupImg from "../public/ungroup.png";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.header}>
          <Image
           src={profilePic}
           className={styles.profilePic}
           />
        <button className={styles.ungroupButton}>
          <Image src={ungroupImg} />
        </button>
      </header>
    </div>
  );
}
