import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase-config/firebaseConfig';


export const AuthContext = createContext(null)

// const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const gProvider = () =>{
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        gProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;