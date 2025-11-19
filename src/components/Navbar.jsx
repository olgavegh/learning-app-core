import { Link, useLocation } from "react-router-dom";
import { getNavItems } from "../constants/navigationData";
import UserBtns from "../components/UserBtns";
import PrimaryButton from "../components/ui/PrimaryButton.jsx"
import { useAuth } from "../context/AuthProvider";

function Navbar() {
	const location = useLocation(); // get the current path name
	const { user, signOut } = useAuth();

	return (
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
								user={user}
								signOut={signOut}
							/>
						</div>
						<ul className="navbar-nav ms-auto align-items-center">
							{getNavItems(location.pathname).map((page, index) => (
								<li key={index} className="nav-item fw-semibold">
									<Link to={page.path} className={`nav-link ${page.activity ? 'active' : ''}`}>{page.text}</Link>
								</li>
							))}
							<li>
								<PrimaryButton type="button" onClick={""}>
									Call Barna
								</PrimaryButton>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{<div>
				{user ? (<div>{user.email} is signed in</div>) : (<div>No user signed in</div>)}
			</div>}
		</header>
	)
}

export default Navbar;
