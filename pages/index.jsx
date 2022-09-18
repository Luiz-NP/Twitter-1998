import Image from "next/image";

//css
import styles from "../styles/login.module.css";

//images
import logo from "../public/images/icons/logo.png";
import { useState } from "react";

export default function Login() {

    const [haveAccount, setHaveAccount] = useState(false);

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Image 
                 src={logo}
                 width={50}
                 height={50} 
                />
                <h1 className={styles.title}>
                    {haveAccount
                     ? "Log in to Twitter"
                     : "Create your account"
                    }
                </h1>
                <div>
                    <label htmlFor="username" className={styles.label}>
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text"
                        name="username"
                        required
                        placeholder="username"
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password"
                        required
                        placeholder="password"
                        className={styles.input}
                    />
                </div>
                <button type="Submit" className={styles.button}>
                    {haveAccount
                     ? "Log in"
                     : "Sign up"
                    }
                </button>
                <span className={styles.span} onClick={() => setHaveAccount(!haveAccount)}>
                    {haveAccount
                     ? "sign up"
                     : "log in"
                    }
                </span>
            </form>
        </div>
    )
}
