import React, { ReactNode, createContext, useContext, useEffect, useState  } from "react";
import { auth } from "../Firebase/Firebase";
import { User, onAuthStateChanged } from "firebase/auth";

const defaultContext = {
  currentUser: null,
}

export const AuthContext = createContext(defaultContext);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: {children: ReactNode}) => {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // @ts-ignore
      onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);


  return (
    // @ts-ignore
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthValue(){
  return useContext(AuthContext)
}

export default AuthProvider;
