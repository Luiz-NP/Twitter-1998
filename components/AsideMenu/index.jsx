import Link from "next/link";
import Image from "next/image";

//css
import styles from "./styles.module.css"

//images
import icon1 from "../../public/images/icons/icon1.png";
import homeIcon from "../../public/images/home.png";
import profileIcon from "../../public/images/profile.png";
import discoverIcon from "../../public/images/discover.png";
import notificationIcon from "../../public/images/notifications.png";
import messageIcon from "../../public/images/message.png";
import bookmarkIcon from "../../public/images/bookmark.png";
import listIcon from "../../public/images/lists.png";
import moreIcon from "../../public/images/more.png";
import dotsIcon from "../../public/images/dots.png" 

//components
import { SearchBar } from "../SearchBar";

export function AsideMenu() {
    return (
        <div>
            <div className={styles.searchBar}>
                <SearchBar />
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={homeIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Home</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <button>
                            <Image 
                            src={profileIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Profile</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={discoverIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Discover</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={notificationIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Notifications</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={messageIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Messages</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={bookmarkIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Bookmarks</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={listIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>Lists</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/home">
                        <button>
                            <Image 
                            src={moreIcon} 
                            width={24} 
                            height={24}
                            />

                            <span>More</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <button className={styles.tweetButton}>
                        Tweet
                    </button>
                </li>
                <li>
                    <Link href="/profile">
                        <a>
                            <Image
                             src={icon1}
                             width={40}
                             height={40}
                            />
                        </a>
                    </Link>
                    <div>
                        <strong>Eren Demir</strong>
                        <span>@erendmrv</span>
                    </div>

                    <button>
                        <Image 
                         src={dotsIcon}
                        />
                    </button>
                </li>
            </ul>
        </div>
    )
}