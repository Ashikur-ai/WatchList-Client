import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser);
                setLoading(false);
        }
        )
    },[])

    // Email Authentication 
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {

        setLoading(true);
        return signOut(auth);
    }

    
    
    // Google Authentication
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    

    const AuthInfo = {
        createUser,
        user,
        LogInUser,
        LogOut,
        googleSignIn,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;