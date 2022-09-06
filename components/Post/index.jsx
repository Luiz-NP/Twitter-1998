import Image from "next/image";

//css
import styles from "./styles.module.css";

//images
import icon2 from "../../public/images/icons/icon2.png";
import commentIcon from "../../public/images/comment.png";
import retweetIcon from "../../public/images/retweet.png";
import likeIcon from "../../public/images/like.png";
import shareIcon from "../../public/images/share.png";

export function Post() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                
                <Image src={icon2}/>

                <div className={styles.content}>
                    <p>Tommy Blue <span>@bluee</span></p>
                    
                    <p>Amet habitant mollis adipiscing pretium scelerisque urna euismod nec nullam.</p>
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
                    <button>
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