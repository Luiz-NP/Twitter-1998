import Image from "next/image";

//css
import styles from "./styles.module.css";

//images
import icon1 from "../../public/images/icon1.png";
import picturePic from "../../public/images/image.png";
import gifPic from "../../public/images/gif.png";
import chartPic from "../../public/images/chart.png";
import emojiPic from "../../public/images/emoji.png";
import calendarPic from "../../public/images/time.png";
import locationPic from "../../public/images/location.png";

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <Image src={icon1}/>
                <span>What’s <br /> happening?</span>
            </div>
            
            <input 
             className={styles.input}
             type="text" 
            />

            <ul className={styles.buttons}>
                <li>
                    <button>
                        <Image src={picturePic}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={gifPic}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={chartPic}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={emojiPic}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={calendarPic}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={locationPic}/>
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