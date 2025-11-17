import { useState } from "react";

function usePageNavigation() {
  const [currentPage, setCurrentPage] = useState("dashboard"); // dashboard | study | matching | memory | quiz | bookmarks

  const navigateToPage = (page) => {
    console.log("... am editing the page right now", currentPage);
    setCurrentPage(page);
  };

  return { currentPage, navigateToPage };
}

export default usePageNavigation;
