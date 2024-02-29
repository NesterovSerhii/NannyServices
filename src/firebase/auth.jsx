import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
 const [user, setUser] = useState(null);
  

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (maybeUser) => {
      setUser(maybeUser);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {

  return React.useContext(AuthContext);
};
