import { useState } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';

function SignInForm() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    setError(null);
    setMessage(null);

    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, email, password);
      console.log('S-in successfull');
      console.log(loggedInUser);
      setMessage(`✅ Sign-in successful!`);
    } catch (error) {
      console.log('S-in failed', error);
      setError(error.message)
    }
  }

  return (
    <>
      <h3>Sign In</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3 text-start small">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)} />
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
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" type="button" onClick={handleSignIn}>Sign in</button>
        </div>
      </form>
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {message && <div style={{ color: 'green' }}>{message}</div>}
      </div>
    </>
  )
}

export default SignInForm;
