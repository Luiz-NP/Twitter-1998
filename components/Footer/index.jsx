import Image from "next/image";
import Link from "next/link";

//css
import styles from "./styles.module.css";

//images
import homeIcon from "../../public/images/home.png";
import searchIcon from "../../public/images/search.png";
import notificationIcon from "../../public/images/notifications.png";
import messageIcon from "../../public/images/message.png";


export function Footer() {
    return (
        <footer className={styles.footer}>
        <ul>
          <li>
            <Link href="/home">
              <button>
                <Image
                 src={homeIcon} 
                 width={36} 
                 height={36}
                />
              </button>
            </Link>

          </li>
          <li>
            <Link href="/search">
              <button>
                <Image 
                 src={searchIcon}
                 width={36} 
                 height={36}
                />
              </button>
            </Link>
          </li>
          <li>
            <button>
              <Image 
               src={notificationIcon}
               width={36} 
               height={36}
              />
            </button>
          </li>
          <li>
            <button>
              <Image 
               src={messageIcon} 
               width={36} 
               height={36}
              />
            </button>
          </li>
        </ul>
      </footer>
    )
}