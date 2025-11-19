import { Link, useLocation } from "react-router-dom";
import { getNavItems } from "../constants/navigationData";
import UserBtns from "../components/UserBtns";
import PrimaryButton from "../components/ui/PrimaryButton.jsx"
import IconButton from "../components/ui/IconButton.jsx"
import { useAuth } from "../context/AuthProvider";
import userIcon from "../assets/user-circle-check.svg"

function Navbar() {
	const location = useLocation(); // get the current path name
	const { user, signOut } = useAuth();

	return (
		<header>
			<nav className="navbar navbar-expand-lg sticky-top">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Codey</Link>

					{user && (
						<div className="d-flex align-items-center">
							<IconButton type="button" aria-label="User profile">
								<img src={userIcon} alt="User" width="20" height="20" />
							</IconButton>
							<span className="text-dark ms-2 small">{user.email}</span>
						</div>
					)}

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={(e) => {
							const icon = e.currentTarget.querySelector('.animated-icon');
							icon.classList.toggle('open');
						}}
					>
						<div className="animated-icon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">

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
							<div className="d-flex align-items-center m-3">
								<UserBtns
									user={user}
									signOut={signOut}
								/>
							</div>
						</ul>
					</div>
				</div>
			</nav>

		</header>
	)
}

export default Navbar;
