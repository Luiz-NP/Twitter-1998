import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [haveAccount, setHaveAccount] = useState(true);
    
    async function signIn({ username, password }) {
        return await axios.post(`/api/${haveAccount ? 'login' : 'signIn'}`, {
            username,
            password
        })
        .then(res => {
            return res.data.message;
        });
    }

    return (
        <AuthContext.Provider value={{ signIn, haveAccount, setHaveAccount}}>
            {children}
        </AuthContext.Provider>
    )
} 