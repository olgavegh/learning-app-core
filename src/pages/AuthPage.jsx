import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import AuthForm from "../components/forms/AuthForm";
import { useNavigate, useLocation } from "react-router-dom";


export default function AuthPage({ mode }) {
    const isSignIn = mode === "sign-in";
    const { signIn, signUp, error, reset } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        reset();
    }, [reset, location.pathname]);

    async function handleSubmit({ email, password }) {
        const success = isSignIn
            ? await signIn(email, password)
            : await signUp(email, password);
        if (success) navigate("/");
    }

    return (
        <main className="auth-page neo-brutalism">
            <AuthForm isSignIn={isSignIn} onSubmit={handleSubmit} />
            {error ? <div className="error-box neo-error">{error}</div> : null}
        </main>
    );
}
