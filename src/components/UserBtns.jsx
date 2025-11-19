import { Link } from "react-router-dom";

function UserBtns({ user, onSignOut }) {

  return (
    <>
      {!user ? (
        <>
          <button >
            <Link to="/sign-up" className="nav-link" >Sign up</Link>
          </button>

          <button >
            <Link to="/sign-in" className="nav-link" >Sign in</Link>
          </button>
        </>
      ) : (
        <button onClick={onSignOut}>
          <Link to="/" className="nav-link">Sign out</Link>
        </button>
      )}
    </>
  )
}

export default UserBtns;
