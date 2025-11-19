import AuthForm from "./AuthForm";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { signUp, error, reset } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    reset();
  }, [reset]);

  async function handleSubmit({ email, password }) {
    const success = await signUp(email, password);
    if (success) navigate('/');
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
