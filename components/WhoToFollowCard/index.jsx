import Image from "next/image";
import { useState } from "react";

//css
import styles from "./styles.module.css";

//images
import icon1 from "../../public/images/icons/icon1.png";
import icon3 from "../../public/images/icons/icon3.png";
import icon4 from "../../public/images/icons/icon4.png";
import icon5 from "../../public/images/icons/icon5.png";

export function WhoToFollowCard() {
    const [showMore, setShowMore] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <main className={styles.trend}>
            <h1 className={styles.title}>Who to follow</h1>

            <ul className={styles.topics}>
                <li>
                    <Image 
                     src={icon3}
                    />

                    <div>
                        <h2>Selina Jack</h2>
                        <span>@seljack</span>
                    </div>

                    <button>
                        Follow
                    </button>
                </li>
                <li>
                    <Image 
                     src={icon4}
                    />

                    <div>
                        <h2>Adriano</h2>
                        <span>@adriano7</span>
                    </div>

                    <button>
                        Follow
                    </button>
                </li>
                <li>
                    <Image 
                     src={icon5}
                    />

                    <div>
                        <h2>Kane’s Cat</h2>
                        <span>@catcatcatkane</span>
                    </div>

                    <button>
                        Follow
                    </button>
                </li>
                {showMore &&
                    <li>
                        <Image 
                         src={icon1}
                         width={48}
                         height={48}
                        />

                        <div>
                            <h2>Eren Demir</h2>
                            <span>@erendmrv</span>
                        </div>

                        <button>
                            Follow
                        </button>
                    </li>
                }
                <li>
                    <span className={styles.showMore} onClick={toggleShowMore}>
                        Show more
                    </span>
                </li>
            </ul>
        </main>
    )
}