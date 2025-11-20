import { createContext, useState, useCallback, useContext } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {
  signOut as fbSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";
import { HashLoader } from "react-spinners";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, loading] = useIdToken(auth);
  // Debug logs to track loading and user state
  console.log('[AuthProvider] user:', user);
  console.log('[AuthProvider] loading:', loading);
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
      {loading && (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
          <HashLoader color="#17a2b8" size={80} margin={3} />
          <p className="mt-3 text-muted">Checking authentication...</p>
        </div>
      )}
      {!loading && children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => useAuth()?.user?.accessToken;

export default AuthProvider;
