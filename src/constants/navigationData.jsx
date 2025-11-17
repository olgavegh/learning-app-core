// ====================================
// APP NAVIGATION & PAGES DATA
// ====================================

import StudyPage from "../pages/StudyPage";
import MatchingPage from "../pages/MatchingPage";
import TestPage from "../pages/TestPage";
import BookmarkedPage from "../pages/BookmarkedPage";
import AdminPage from "../pages/AdminPage"

export const PAGES = {
  DASHBOARD: "dashboard",
  STUDY: "study",
  MATCHING: "matching",
  TEST: "test",
  BOOKMARKS: "bookmarks",
  ADMIN: "admin",
};

export const FEATURE_ITEMS = [
  {
    id: PAGES.STUDY,
    text: "Study Mode",
    activity: false,
    order: 2,
    backgroundColor: "rgb(253, 253, 150)",
    description:
      'Scrollable list or card deck of all questions + answers. Clean, readable layout for quick review. "Mark as learned" toggle per question.',
    icon: "📚",
    component: <StudyPage />,
  },
  {
    id: PAGES.MATCHING,
    text: "Matching Game",
    activity: false,
    order: 3,
    backgroundColor: "rgb(253, 253, 256)",
    description:
      "Interactive matching game where you connect questions with their correct answers. Perfect for memory retention and quick recall practice.",
    icon: "🎯",
    component: <MatchingPage />,
  },
  {
    id: PAGES.TEST,
    text: "Test Game",
    activity: false,
    order: 4,
    backgroundColor: "rgb(218, 245, 256)",
    description:
      "You get a random question from the selected topic(s) and three answer options. Choose the good one!",
    icon: "✅",
    component: <TestPage />,
  },

  {
    id: PAGES.BOOKMARKS,
    text: "Bookmarked",
    activity: false,
    order: 6,
    backgroundColor: "rgb(248, 214, 179)",
    description:
      "Save your favorite questions and challenging topics for later review. Organize your study materials and track questions you want to revisit before your assessment.",
    icon: "🔖",
    component: <BookmarkedPage />,
  },
  {
    id: PAGES.ADMIN,
    text: "Admin",
    activity: false,
    order: 7,
    backgroundColor: "rgb(253, 253, 256)",
    description:
      "Admin site",
    icon: "🔖",
    component: <AdminPage />,
  },
];

export const STUDY_MODULES = [
  {
    id: "all",
    name: "All Modules",
    description: "Show questions from all topics",
    color: "rgb(253, 253, 150)",
    activity: true,
  },
  {
    id: "progbasics",
    name: "Programming Basics",
    description: "Fundamental programming concepts",
    color: "rgb(218, 245, 256)",
    activity: false,
  },
  {
    id: "web",
    name: "Web Development",
    description: "Frontend, backend, and web technologies",
    color: "rgb(248, 214, 179)",
    activity: false,
  },
];

// ====================================
// HELPER FUNCTIONS
// ====================================

// for Header
export function getNavItems(currentPage) {
  return FEATURE_ITEMS.map((item) => ({
    id: item.id,
    text: item.text,
    activity: item.id === currentPage,
    component: item.component,
  }));
}

// for DashBoard Cards =>  Only items with descriptions !!!
export function getDashboardCards() {
  return FEATURE_ITEMS.filter((item) => item.description).map((item) => ({
    id: item.id,
    page: item.id,
    backgroundColor: item.backgroundColor,
    title: item.text,
    description: item.description,
    icon: item.icon,
  }));
}

// for Header
export function getModules(currentModule) {
  return FEATURE_ITEMS.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    color: item.color,
    activity: item.id === currentModule,
  }));
}
