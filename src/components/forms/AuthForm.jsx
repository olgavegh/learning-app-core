
import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

function AuthForm({ onSubmit, isSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!isSignIn && password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    onSubmit({
      email,
      password,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="neo-form bg-white mx-auto p-4 border border-2 border-dark neo-shadow fix-shadow d-flex d-flex flex-column gap-5"
    >
      <h2
        className="lh-sm text-center text-dark text-uppercase text-break"
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </h2>
      <div>
        <div className="d-flex flex-column align-items-start gap-0 mb-3">
          <label className="form-label fw-semibold" htmlFor="email" style={{ fontWeight: 600, marginBottom: 5 }}>
            Email
          </label>
          <input
            className="form-control border border-1 border-dark neo-shadow fix-shadow"
            style={{
              borderRadius: 0,
              background: "#f7f7f7",
              fontSize: 15,
            }}
            type="email"
            id="email"
            name="email"
            value={email}
            required
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column align-items-start gap-0 mb-3">
          <label className="form-label fw-semibold" htmlFor="password" style={{ fontWeight: 600, marginBottom: 5 }}>
            Password
          </label>
          <input
            className="form-control border border-1 border-dark neo-shadow fix-shadow"
            style={{
              borderRadius: 0,
              background: "#f7f7f7",
              fontSize: 15,
            }}
            type="password"
            id="password"
            name="password"
            value={password}
            required
            autoComplete={isSignIn ? "current-password" : "new-password"}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {!isSignIn && (
          <div className="d-flex flex-column align-items-start gap-0">
            <label className="form-label fw-semibold" htmlFor="confirm" style={{ fontWeight: 600, marginBottom: 5 }}>
              Confirm Password
            </label>
            <input
              className="form-control border border-1 border-dark neo-shadow fix-shadow"
              style={{
                borderRadius: 0,
                background: "#f7f7f7",
                fontSize: 15,
              }}
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              required
              autoComplete="new-password"
              onChange={e => setConfirm(e.target.value)}
            />
          </div>)}
      </div>

      <div>
        <PrimaryButton onClick={handleSubmit} type="submit" widthCss="w-100">
          {isSignIn ? "Sign In" : "Sign Up"}
        </PrimaryButton>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <div className="text-center mt-4">
          {isSignIn ? (
            <span>
              Don't have an account?
              <Link to="/sign-up" className="fw-bold ms-1" style={{ textDecoration: "underline" }}>
                Sign Up
              </Link>
            </span>
          ) : (
            <span>
              Already have an account?
              <Link to="/sign-in" className="fw-bold ms-1" style={{ textDecoration: "underline" }}>
                Sign In
              </Link>
            </span>
          )}
        </div>
      </div>

    </form>
  );
}

export default AuthForm;
