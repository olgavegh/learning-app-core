import './App.css'

import { Routes, Route, Link } from "react-router-dom"
import { getNavItems } from "./constants/navigationData";

import usePageNavigation from './hooks/usePageNavigation';
import BookmarkedPage from './pages/BookmarkedPage';
import StudyPage from "./pages/StudyPage";
import TestPage from './pages/TestPage';
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import Footer from "./components/Footer";
import MatchingPage from "./pages/MatchingPage";

function App() {
  const { currentPage, navigateToPage } = usePageNavigation()

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >Codey</Link>


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse align-items-center" id="navbarNav">

              {getNavItems(currentPage).map((page, index) => (
                <Link to={page.id} className="nav-item fw-semibold">{page.text}</Link>
              ))}
              <div>
                <button className="navbar-cta" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="cta" aria-expanded="false" aria-label="Call to Action">
                  Call Barna
                </button>
              </div>

            </div>
          </div>
        </nav>
      </header>

      <Routes>
        {/* <div className="">
          {currentPage === "dashboard" && <DashBoard navigateToPage={navigateToPage} />}
          {currentPage === "study" && <StudyPage />}
          {currentPage === "matching" && <MatchingPage />}
          {currentPage === "test" && <TestPage />}
          {currentPage === "bookmarks" && <BookmarkedPage />}
        </div> */}

      </Routes>
      <Footer />
    </>
  )
}

export default App
