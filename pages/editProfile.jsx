import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//css
import wrapper from "../styles/home.module.css";
import styles from "../styles/editProfile.module.css";

//images
import closeIcon from "../public/images/close.png";
import icon1 from "../public/images/icons/icon1.png";

//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function EditProfile() {
    return (
        <div className={wrapper.wrapper}>

            <Head>
                <title>Profile Page</title>
            </Head>

            <Header />

                <div className={styles.editCard}>
                    <Link href="/profile">
                        <button className={styles.closeButton}>
                            <Image
                             src={closeIcon}
                             width={20}
                             height={20}
                            />
                        </button>
                    </Link>

                    <button className={styles.saveButton}>
                        Save
                    </button>

                    <span className={styles.image}>
                        <Image 
                         src={icon1}
                         width={132}
                         height={132}
                        />
                    </span>

                    <div className={styles.input}>
                        <span>Name</span>
                        <input type="text" />
                    </div>

                    <div className={styles.input}>
                        <span>Information</span>
                        <input type="text" />
                    </div>

                    <div className={styles.input}>
                        <span>Location</span>
                        <input type="text" />
                    </div>
                </div>

            <Footer />
        </div>
    )
}