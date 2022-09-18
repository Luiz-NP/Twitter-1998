import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

//css
import styles from "./styles.module.css";

//images
import icon1 from "../../public/images/icons/icon1.png";
import logo from "../../public/images/icons/logo.png";
import ungroupImg from "../../public/images/ungroup.png";
import closeIcon from "../../public/images/close.png";
import profileIcon from "../../public/images/profile.png";
import notificationIcon from "../../public/images/notifications.png";
import discoverIcon from "../../public/images/discover.png";
import messageIcon from "../../public/images/message.png";
import bookmarkIcon from "../../public/images/bookmark.png";
import listIcon from "../../public/images/lists.png";
import moreIcon from "../../public/images/more.png";
import { SearchBar } from "../SearchBar";

export function Header({searchBar}) {
    const menu = useRef();

    function showMenu() {
        menu.current.style.transform = "translateX(-5%)";
        document.body.style.overflow = "hidden";
    }

    function hideMenu() {
        menu.current.style.transform = "translateX(-100%)";
        document.body.style.overflow = "scroll";
    }

    return (
        <header className={styles.header}>
            <div ref={menu} className={styles.menu}>
                <div className={styles.head}>
                    <span>
                        Account Info
                    </span>

                    <button className={styles.closeButton} onClick={hideMenu}>
                        <Image
                         src={closeIcon}
                         width={20}
                         height={20}
                        />
                    </button>
                </div>

                <span>
                    <Link href="/profile">
                        <Image
                         src={icon1}
                         width={48}
                         height={48}
                         onClick={hideMenu}
                        />
                    </Link>
                </span>

                <div className={styles.username}>
                    <h2>Eren Demir</h2>
                    <span>@erendmrv</span>
                </div>

                <div className={styles.follow}>
                    <span><strong>181</strong> Following</span>
                    <span><strong>321</strong> Followers</span>
                </div>

                <ul className={styles.buttons}>
                    <li>
                        <button>
                            <Image 
                             src={profileIcon}
                            />
                        </button>
                        <span>Profile</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                             src={notificationIcon}
                            />
                        </button>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                             src={discoverIcon}
                            />
                        </button>
                        <span>Discover</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                             src={messageIcon}
                            />
                        </button>
                        <span>Messages</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                             src={bookmarkIcon}
                            />
                        </button>
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                             src={listIcon}
                            />
                        </button>
                        <span>Lists</span>
                    </li>
                    <li>
                        <button>
                            <Image 
                            src={moreIcon}
                            />
                        </button>
                        <span>More</span>
                    </li>
                </ul>

                <span className={styles.logout} onClick={hideMenu}>
                    <Link href="/">
                        Log out
                    </Link>
                </span>
            </div>

                <span className={styles.mobileImg}>
                    <Image
                     src={icon1}
                     width={48}
                     height={48}
                     onClick={showMenu}
                    />
                </span>

                <span className={styles.deskImg}>
                    <Link href="/home">
                        <Image
                         src={logo}
                         width={48}
                         height={48}
                        />
                    </Link>
                </span>

            {searchBar
                ? 
                 <SearchBar />
                :
                 <span className={styles.title}>
                    Homepage
                 </span>
            }
            

            {!searchBar
                &&
                 <div className={styles.group}>
                     <button className={styles.ungroupButton}>
                        <Image src={ungroupImg}/>
                     </button>
                     
                     <span className={styles.searchBar}>
                        <SearchBar />
                     </span>
                 </div>
            }

        </header>
    )
}