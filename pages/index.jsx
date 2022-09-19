import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

//css
import styles from "../styles/login.module.css";

//images
import logo from "../public/images/icons/logo.png";
import closeIcon from "../public/images/close.png";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [signError, setSignError] = useState(false);
    const { signIn, haveAccount, setHaveAccount} = useContext(AuthContext);

    async function handleSignIn(data) {
        const sign = await signIn(data);
        
        if (sign === "error") {
            setSignError(true)
        }
    }

    return (
        <div className={styles.container}>
            {signError && haveAccount &&
                <div className={styles.error}>
                    <button className={styles.closeButton} onClick={() => setSignError(false)}>
                        <Image
                         src={closeIcon}
                         width={20}
                         height={20}
                        />
                    </button>
                    <span>username or password invalid.</span>
                </div>
            }
            <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
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
                        {...register("username")}
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
                        {...register("password")}
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
                <span className={styles.span} onClick={() => {setHaveAccount(!haveAccount); setSignError(false)}}>
                    {haveAccount
                     ? "sign up"
                     : "log in"
                    }
                </span>
            </form>
        </div>
    )
}
