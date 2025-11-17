import './App.css'
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
      <Header currentPage={currentPage} navigateToPage={navigateToPage} />
      <div className="">
        {currentPage === "dashboard" && <DashBoard navigateToPage={navigateToPage} />}
        {currentPage === "study" && <StudyPage />}
        {currentPage === "matching" && <MatchingPage />}
        {currentPage === "test" && <TestPage />}
        {currentPage === "bookmarks" && <BookmarkedPage />}
      </div>
      <Footer />
    </>
  )
}

export default App
