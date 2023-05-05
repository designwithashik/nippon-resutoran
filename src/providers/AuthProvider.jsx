import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [error, setError] = useState('');
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefs, setChefs] = useState([]);



    const emailSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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
            setLoading(false);
    },[])



    const authInfo = {
        user,
        loading,
        chefs,
        error,
        googleLogIn,
        logOut,
        githubLogIn,
        emailLogIn,
        emailSignUp,
        setError,
        setUser,
        setLoading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;