import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import AuthForm from "./AuthForm";


function SignIn() {
  const { signIn, error, reset } = useAuth();

  useEffect(() => {
    reset()
  }, [reset]);
  
  function handleSubmit({ email, password}) {
    signIn(email, password);
  }
 
  return (
    <main className="auth-page">
      <h3>Sign In</h3>
      <AuthForm 
      isSignIn={true}
      onSubmit={handleSubmit}
      />
      {error ? <div className="error-box">{error}</div> : null}
    </main>
  )
}

export default SignIn;
