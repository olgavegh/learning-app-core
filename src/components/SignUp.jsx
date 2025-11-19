import AuthForm from "./AuthForm";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

function SignUp() {
  const { signUp, error, reset } = useAuth();
  
  useEffect(() => {
    reset();
  }, [reset]);

  function handleSubmit({ email, password }) {
    signUp(email, password);
  }

  return (
    <main className="auth-page">
      <h3>Sign Up</h3>
      <AuthForm
      isSignIn={false}
      onSubmit={handleSubmit}
      />
      {error ? <div className="error-box">{error}</div> : null}
    </main>
  )
}

export default SignUp;
