import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

//css
import styles from "./styles.module.css";

//images
import icon2 from "../../public/images/icons/icon2.png";
import commentIcon from "../../public/images/comment.png";
import retweetIcon from "../../public/images/retweet.png";
import likeIcon from "../../public/images/like.png";
import shareIcon from "../../public/images/share.png";

export function Post({ name, username, content, tweetId }) {
    const { user } = useContext(AuthContext);
    const [liked, setLiked] = useState(false);

    function like() {
        setLiked(!liked);

        const ownerId = user._id;

        axios.post("/api/likeTweet", {
            tweetId,
            ownerId,
            liked
        })
        .then(res => {
            console.log(res);
        })

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                
                <Image src={icon2} />

                <div className={styles.content}>
                    <p>{ name } <span>{ username }</span></p>
                    
                    <p>{ content }</p>
                </div>
            </div>

            <ul className={styles.buttons}>
                <li>
                    <button>
                        <Image src={commentIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={retweetIcon}/>
                    </button>
                </li>
                <li>
                    <button onClick={like}>
                        <Image src={likeIcon}/>
                    </button>
                </li>
                <li>
                    <button>
                        <Image src={shareIcon}/>
                    </button>
                </li>
            </ul>
        </div>
    )
}