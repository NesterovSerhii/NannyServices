import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (maybeUser) => {
      if (maybeUser !== null) {
        setUser(maybeUser);
      }
    });
    return unsub;
  }, [auth]);

  return (
    <div>
      {user !== null ? (
        <>{user.displayName}</>
      ) : (
        <>     
        loading
        </>
      )}
    </div>
  );
};
