import Head from "next/head";
import Image from "next/image";

//css
import styles from "../styles/home.module.css";

//images
import icon1 from "../public/images/icon1.png";
import ungroupImg from "../public/images/ungroup.png";

//components
import { Card } from "../components/Card";

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
    </div>
  );
}
