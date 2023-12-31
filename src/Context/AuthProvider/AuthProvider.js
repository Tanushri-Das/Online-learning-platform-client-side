import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  
  const providerLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const createUser = (email, password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile)=>{
    setLoading(true);
    return updateProfile(auth.currentUser,profile);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
      console.log('inside state change',currentUser);
       setUser(currentUser);
       setLoading(false);
     });
     return ()=>{
       unsubscribe();
     }
   },[])
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  
  const authInfo = { user, 
    providerLogin ,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
