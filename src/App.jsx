import './App.css'

import { Routes, Route, Link } from "react-router-dom"
import { getNavItems } from "./constants/navigationData";
import UserBtns from "./components/UserBtns";
import DashBoard from "./pages/DashBoard";
import Footer from "./components/Footer";


function App() {

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
                <UserBtns />
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
