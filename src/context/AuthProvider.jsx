import { createContext, useState, useCallback, useContext } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {
  signOut as fbSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, loading] = useIdToken(auth);
  const [error, setError] = useState(null);

  async function signUp(email, password) {
    setError(null)

    try {
      const registeredUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log('S-up successful');
      console.log(registeredUser);
      return true;
    } catch (err) {
      if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("Email already exists");
      } else if (err.code === AuthErrorCodes.INVALID_EMAIL) {
        setError("Invalid email address");
      } else if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
        setError("Invalid password");
      } else {
        setError("Authentication error");
      }
      return false;
    }
  }

  async function signIn(email, password) {
    setError(null);

    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, email, password);
      console.log('S-in successful');
      console.log(loggedInUser);
      return true;
    } catch (err) {
      if (err.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError("Wrong Credentials");
      } else {
        setError("Authentication error");
      }
      return false;
    }
  }

  const signOut = useCallback(() => {
    setError(null);
    console.log('S-out successful');
    return fbSignOut(auth);
  }, []); // Having react compiler we do not need to use the useCallback any more

  const reset = useCallback(() => {
    setError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        error,
        user,
        signUp,
        signIn,
        signOut,
        reset
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => useAuth()?.user?.accessToken;

export default AuthProvider;
