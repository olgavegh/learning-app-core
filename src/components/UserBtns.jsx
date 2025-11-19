import { Link } from "react-router-dom";

function UserBtns({ user, signOut }) {

  return (
    <>
      {!user ? (
        <>
          <button type="button">
            <Link to="/sign-up" className="nav-link" >Sign up</Link>
          </button>

          <button type="button">
            <Link to="/sign-in" className="nav-link" >Sign in</Link>
          </button>
        </>
      ) : (
        <button type="button" onClick={signOut}>
          <Link to="/" className="nav-link">Sign out</Link>
        </button>
      )}
    </>
  )
}

export default UserBtns;
