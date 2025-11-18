import './App.css'

import { Routes, Route, Link } from "react-router-dom";
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getNavItems } from "./constants/navigationData";
import { useState, useEffect } from 'react';
import UserBtns from "./components/UserBtns";
import DashBoard from "./pages/DashBoard";
import Footer from "./components/Footer";

const TEST_EMAIL = 'test@example.com';
const TEST_PASSWORD = 'testPassword';

function App() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('The user\'s auth state changed:', currentUser);
      setUser(currentUser);
    })
  }, [])

  async function handleSignUp() {
    setError(null);
    setMessage(null);

    try {
      const registeredUser = await createUserWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
      console.log('S-up successfull');
      console.log(registeredUser);
      setMessage('✅ Sign-up successful!');
    } catch (error) {
      console.log('S-up failed', error);
      setError(error.message)
    }
  }

  async function handleSignIn() {
    setError(null);
    setMessage(null);

    try {
      const loggedInUser = await signInWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
      console.log('S-in successfull');
      console.log(loggedInUser);
      setMessage('✅ Sign-in successful!');
    } catch (error) {
      console.log('S-in failed', error);
      setError(error.message)
    }
  }

  async function handleSignOut() {
    setError(null);
    setMessage(null);

    try {
      const signedOut = await signOut(auth);
      console.log('S-out successfull');
      console.log(signedOut);
      setMessage('✅ Sign-out successful!');
    } catch (error) {
      console.log('sign-out failed', error);
      setError(error.message);
    }
  }


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Codey</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="d-flex align-items-center me-auto">
                <UserBtns
                  onSignUp={handleSignUp}
                  onSignIn={handleSignIn}
                  onSignOut={handleSignOut}
                />
              </div>
              <ul className="navbar-nav ms-auto align-items-center">
                {getNavItems().map((page, index) => (
                  <li key={index} className="nav-item fw-semibold">
                    <Link to={page.id} className="nav-link">{page.text}</Link>
                  </li>
                ))}
                <li>
                  <button className="navbar-cta" type="button" aria-label="Call to Action">
                    Call Barna
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/*<div>
        {user ? (<div>{user.email} is signed in</div>) : (<div>No user signed in</div>)}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {message && <div style={{ color: 'green' }}>{message}</div>}
      </div>*/}

      <Routes>
        <Route path="/" element={<DashBoard />} />
        {getNavItems().map((page, index) => (
          <Route key={index} path={`/${page.id}`} element={page.component} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
