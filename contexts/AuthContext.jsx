import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import jwt from "jsonwebtoken";
import axios from "axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [haveAccount, setHaveAccount] = useState(true);
    const [user, setUser] = useState(null);
    const [likesInfo, setLikesInfo] = useState([]);
    const { 'auth-token': token } = parseCookies();


        useEffect(() => {
            if (token) {
                const decode = jwt.decode(token);
                
                axios.post('/api/recover', {
                    decodeId: decode?.id
                })
                .then(res => {
                    setUser(res.data?.user)
                });
            } 
        }, [token]);
            
    async function signIn({ username, password }) {
        return await axios.post(`/api/${haveAccount ? 'login' : 'signIn'}`, {
            username,
            password
        })
        .then(res => {
            setCookie(undefined, 'auth-token', res.data.token, {
                maxAge: 60 * 60 * 1, // 1 hour
            });

            return res.data.message;
        });
    }

    return (
        <AuthContext.Provider value={{ signIn, haveAccount, setHaveAccount, user, likesInfo, setLikesInfo}}>
            {children}
        </AuthContext.Provider>
    )
}