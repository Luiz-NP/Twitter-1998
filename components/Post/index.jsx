import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

//css
import styles from "./styles.module.css";

//images
import icon2 from "../../public/images/icons/icon2.png";
import commentIcon from "../../public/images/comment.png";
import retweetIcon from "../../public/images/retweet.png";
import likeIcon from "../../public/images/like.png";
import likedIcon from "../../public/images/liked.png";
import shareIcon from "../../public/images/share.png";

export function Post({ name, username, content, tweetId, setLikesInfo, likes}) {
    const { user } = useContext(AuthContext);
    const [liked, setLiked] = useState(false);
    const ownerId = user?._id;

    function like() {
        setLiked(!liked);

        axios.post("/api/likeTweet", {
            tweetId,
            ownerId,
            liked
        })
        .then(res => {
            setLikesInfo(res.data);
        });
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

            <div className={styles.buttons}>
                    <button>
                        <Image src={commentIcon}/>
                    </button>
                    <button>
                        <Image src={retweetIcon}/>
                    </button>
                <button onClick={like}>
                    <span className={styles.span}>{likes.length}</span>
                    
                    <div>
                        {liked 
                         ? <Image src={likeIcon}/>
                         : <Image src={likedIcon}/>}
                    </div>
                </button>
                    <button>
                        <Image src={shareIcon}/>
                    </button>
            </div>
        </div>
    )
}