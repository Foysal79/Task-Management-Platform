import { createContext, useState } from "react";
import { GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useEffect } from "react";
const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn = (email, password) => {
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    const GoogleAccount = () => 
    {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
          })
          return () => {
            unsubscribed();
          }
     }, [])



    const userInfo = {
        user,
        loading,
        LogIn,
        LogOut,
        GoogleAccount,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;