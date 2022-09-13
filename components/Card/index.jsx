import Image from "next/image";
import Link from "next/link";

//css
import styles from "./styles.module.css";

//images
import icon1 from "../../public/images/icons/icon1.png";
import pictureIcon from "../../public/images/image.png";
import gifIcon from "../../public/images/gif.png";
import chartIcon from "../../public/images/chart.png";
import emojiIcon from "../../public/images/emoji.png";
import calendarIcon from "../../public/images/time.png";
import locationIcon from "../../public/images/location.png";

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/profile">
                    <Image 
                     src={icon1}
                     width={48}
                     height={48}
                    />
                </Link>
                <span className={styles.question}>What’s <br /> happening?</span>
            </div>
            
            <input 
             className={styles.input}
             type="text" 
            />

            <ul className={styles.buttons}>
                <li>
                    <button>
                        <Image src={pictureIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={gifIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={chartIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={emojiIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={calendarIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={locationIcon}/>
                    </button>
                </li>
                <li>
                    <button type="submit">
                        Tweet
                    </button>
                </li>
            </ul>
            
        </div>
    )
}