import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import pt from 'prop-types'
import auth from "./firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    let googleProvider = new GoogleAuthProvider();
    let [user, setUser] = useState({})
    let [loading, setLoading] = useState(true)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const updateUser = (name,url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }


    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (usr) => {
            setUser(usr)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])

    let data = {
        createUser,
        login,
        user,
        logOut,
        updateUser,
        loading,
        googleLogin,
        Toast,
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: pt.node,
}
export default AuthProvider;