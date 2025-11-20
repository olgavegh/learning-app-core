import { HashLoader } from "react-spinners";

export default function LoadingSpinner({ message }) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 py-5">
            <HashLoader color="#17a2b8" size={80} />
            <p className="mt-3 text-muted">{message}</p>
        </div>
    );
}
