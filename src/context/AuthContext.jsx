import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword ,signOut , updatePassword } from "firebase/auth";
const AuthContext = createContext();

const AuthProvider = ({children})=>{
const [currentuser , setCurrentUser]=useState(null);
const [loading , setLoading]= useState(true);
const signUp =  (email, password) => {
 return  createUserWithEmailAndPassword(auth, email, password);
};
const signIn =  (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  };
const logout = () => {
    return signOut(auth);
  };
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth , (user)=>
{
     console.log("Auth state changed: ", user);
    setCurrentUser(user);
    setLoading(false);
});
return () => {
    unsubscribe();
}
},[])

return(
    <AuthContext.Provider value={{currentuser , signUp , signIn , logout , updateUserPassword}}>
    {!loading && children}
    </AuthContext.Provider>
)
}

export default AuthProvider

export const useAuth =()=>{
    return useContext(AuthContext);
}