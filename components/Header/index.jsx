import Image from "next/image";
import Link from "next/link";

//css
import styles from "./styles.module.css";

//images
import icon1 from "../../public/images/icons/icon1.png";
import ungroupImg from "../../public/images/ungroup.png";
import searchIcon from "../../public/images/search.png";


export function Header({searchBar}) {
    return (
        <header className={styles.header}>
            <Link href="/profile">
                <Image 
                 src={icon1}
                 width={48}
                 height={48}
                />
            </Link>
            {searchBar && 
                <div className={styles.form}>
                    <input 
                     className={styles.input}
                     placeholder="Search Twitter"
                     type="text" 
                    />
                    <button className={styles.searchButton}>
                        <Image 
                         src={searchIcon}
                         width={36} 
                         height={36}
                        />
                    </button>
                </div>
            }
            <button className={styles.ungroupButton}>
                <Image src={ungroupImg} />
            </button>
        </header>
    )
}