import { Link, useLocation } from "react-router-dom";
import { auth } from '../firebase';
import {
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
import { getNavItems } from "../constants/navigationData";
import { useState, useEffect } from 'react';
import UserBtns from "../components/UserBtns";
import PrimaryButton from "../components/ui/PrimaryButton.jsx"

function Navbar() {
	const location = useLocation(); // get the current path name
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			console.log('The user\'s auth state changed:', currentUser);
			setUser(currentUser);
		})
	}, [])

	async function handleSignOut() {

		try {
			const signedOut = await signOut(auth);
			console.log('S-out successfull');
			console.log(signedOut);
		} catch (error) {
			console.log('S-out failed', error);
			console.log(error.message);
		}
	}

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
								onSignOut={handleSignOut}
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
