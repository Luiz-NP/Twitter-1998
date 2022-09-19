import { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [haveAccount, setHaveAccount] = useState(true);
    const router = useRouter();
    
    async function signIn({ username, password }) {
        try {
            await axios.post(`/api/${haveAccount ? "login" : "signUp"}`, {
                username,
                password
            })
            .then(res => {
                console.log(res)
                router.push("/home");
            })    
        } catch (error) {
            return "error";
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, haveAccount, setHaveAccount}}>
            {children}
        </AuthContext.Provider>
    )
} 