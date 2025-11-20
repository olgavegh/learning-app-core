import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";


function SignIn() {
  const { signIn, error, reset } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    reset()
  }, [reset]);
  
  async function handleSubmit({ email, password}) {
    const success = await signIn(email, password);

    if (success) navigate('/');
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
