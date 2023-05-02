import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefs, setChefs] = useState([]);


    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        console.log('logged out')
        return signOut(auth)

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        }

    },[])

    useEffect(() => {
        fetch('https://nippon-resutoran-server-designwithashik.vercel.app/chefs')
            .then(res => res.json())
        .then(data => setChefs(data))
    },[])



    const authInfo = {
        user,
        loading,
        chefs,
        googleLogIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;