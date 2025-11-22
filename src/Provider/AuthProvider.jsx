import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } 
from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AllContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [mail, setMail] = useState(null)

    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    }


    const googleRegister = () => {
        return signInWithPopup(auth, provider)
    }


    const logIn = (email, Password) => {
        return signInWithEmailAndPassword(auth, email, Password)
    }


    const logOutt = () => {
        return signOut(auth)
    }


    const updateUserProfile = ( displayName, photoURL) => {
        return updateProfile(auth.currentUser, displayName, photoURL)
    }


    const changePassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            console.log(loading)
        })
        return () => {
            unsubscrib()
        }
    }, [])

    
    const info = {
        createUser,
        user,
        setUser,
        logIn,
        logOutt,
        loading,
        updateUserProfile,
        googleRegister,
        mail,
        setMail,
        changePassword,

    }

    return (

        <AllContext value={info}>
            {children}
        </AllContext>
    )
}

export default AuthProvider