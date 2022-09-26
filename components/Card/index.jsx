import Image from "next/image";
import Link from "next/link";
import { set, useForm } from "react-hook-form";
import axios from "axios";

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
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Card({ setSentTwitter }) {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    function postTweet({ content }) {
        const ownerId = user._id;
        const ownerName = user.name;
        const ownerUsername = user.username;

        axios.post("/api/createTweet", {
            ownerId,
            content,
            ownerName,
            ownerUsername
        })
        .then(res => {
            setSentTwitter(res);
        })

    }

    function autoResize() {
        content.style.height = content.scrollHeight + "px";
    }

    function resetContent() {
        setTimeout(() => {
            content.value = ""; 
            content.style.height = "16px";
        });
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(postTweet)}>
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
            
            <textarea
             {...register("content")}
             className={styles.input}
             name="content"
             required
             onChange={autoResize}
             id="content"
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
                    <button type="submit" onClick={resetContent}>
                        Tweet
                    </button>
                </li>
            </ul>
            
        </form>
    )
}