import React, { createContext, useEffect, useState } from 'react';
import {getAuth} from 'firebase/auth'


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefs, setChefs] =useState([])


    useEffect(() => {
        fetch('https://nippon-resutoran-server-designwithashik.vercel.app/chefs')
            .then(res => res.json())
        .then(data => setChefs(data))
    },[])



    const authInfo = {
        user,
        loading,
        chefs
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;