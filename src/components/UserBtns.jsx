import { Link } from "react-router-dom";
import IconButton from "../components/ui/IconButton.jsx"
import signInIcon from "../assets/sign-in.svg"
import signOutIcon from "../assets/sign-out.svg"
import userCheckIcon from "../assets/user-circle-check.svg"

function UserBtns({ user, signOut }) {
  return (
    <>
      {!user ? (
        <>
          {/* <IconButton type="button" aria-label="Sign up">
            <Link to="/sign-up" className="nav-link" title="Sign up">
              <img src={userCheckIcon} alt="Sign up" width="20" height="20" />
            </Link>
          </IconButton> */}

          <IconButton type="button" aria-label="Sign in">
            <Link to="/sign-in" className="nav-link" title="Sign in">
              <img src={signInIcon} alt="Sign in" width="20" height="20" />
            </Link>
          </IconButton>
        </>
      ) : (
        <IconButton type="button" onClick={signOut} aria-label="Sign out">
          <Link to="/" className="nav-link" title="Sign out">
            <img src={signOutIcon} alt="Sign out" width="20" height="20" />
          </Link>
        </IconButton>
      )}
    </>
  )
}

export default UserBtns;