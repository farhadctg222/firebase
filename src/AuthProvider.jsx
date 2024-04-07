import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase.confic';

export const AuthContex = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [ user,setuser] = useState()
   const [loading, setLoading] = useState(false)


    const createUser = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const SigIn = (email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
      setLoading(true)
      return  signOut(auth);

    }
    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth,cureentUser=>{
            console.log('user in the auth , ', cureentUser)
            setuser(cureentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
       
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        SigIn
    }
    return (
        <div>
          <AuthContex.Provider value={authInfo}>
            {children}
          </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;