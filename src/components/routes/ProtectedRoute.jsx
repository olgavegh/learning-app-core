import { useAuth } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <p className="text-center mb-3">Please sign in to use this page</p>
                <Navigate to="/sign-in" />
            </div>
        );
    }

    return children;
}
