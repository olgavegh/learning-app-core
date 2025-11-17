import { getNavItems } from "../constants/navigationData";
import UserBtns from "./UserBtns";

function Header({ currentPage, navigateToPage }) {

	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="#" onClick={() => navigateToPage('dashboard')}>
						Codey
					</a>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="d-flex align-items-center me-auto">
							<UserBtns />
						</div>
						<ul className="navbar-nav ms-auto align-items-center">
							{getNavItems(currentPage).map((page, index) => (
								<li key={index} className="nav-item fw-semibold">
									{page.activity ? (
										<a className="nav-link active" aria-current="page" href="#"
											onClick={() => navigateToPage(page.id)}>{page.text}</a>
									) : (
										<a className="nav-link" href="#"
											onClick={() => navigateToPage(page.id)}>{page.text}</a>
									)}

								</li>
							))}
							<li>
								<button className="navbar-cta" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="cta" aria-expanded="false" aria-label="Call to Action">
									Call Barna
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header;
