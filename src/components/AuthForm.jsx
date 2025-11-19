import { useState } from "react";

function AuthForm({ onSubmit, isSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!isSignIn && password !== confirm) {
      setError('password does not match')
      return;
    }

    onSubmit({
      email,
      password,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start small">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="mb-3 text-start small">
          <label className="form-label" htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)} />
        </div>

        {!isSignIn && (
          <div className="mb-3 text-start smal">
            <label className="form-label" htmlFor="confirm">Confirm:</label>
            <input
              className="form-control"
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              required
              onChange={(event) => setConfirm(event.target.value)}
            />
          </div>
        )}

        <div className="mb-3">
          <button className="btn btn-primary" type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
        </div>
        {error && <div className="error-box">{error}</div>}
      </form >
    </>
  )
}

export default AuthForm;
