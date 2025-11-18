import { useState, /*useEffect*/ } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  //onAuthStateChanged,
} from 'firebase/auth';

function SignUpForm() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  //const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  /*useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('The user\'s auth state changed:', currentUser);
      setUser(currentUser);
    })
  }, []);*/

  async function handleSignUp() {
    setError(null);
    setMessage(null);

    try {
      const registeredUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log('S-up successfull');
      console.log(registeredUser);
      setMessage('✅ Sign-up successful!');
    } catch (error) {
      console.log('S-up failed', error);
      setError(error.message)
    }
  }

  return (
    <>
      <h3>Sign Up</h3>
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

        <div className="mb-3">
          <button className="btn btn-primary" type="button" onClick={handleSignUp}>Sign up</button>
        </div>
      </form>
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {message && <div style={{ color: 'green' }}>{message}</div>}
      </div>
    </>
  )
}

export default SignUpForm;
