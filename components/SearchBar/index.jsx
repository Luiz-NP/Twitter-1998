import Image from "next/image";

//css
import styles from "./styles.module.css";

//images
import searchIcon from "../../public/images/search.png";

export function SearchBar() {
    return (
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
    )
}