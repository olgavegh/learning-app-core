// ====================================
// APP NAVIGATION & PAGES DATA
// ====================================
import Home from "../pages/Home"
import StudyPage from "../pages/StudyPage";
import MatchingPage from "../pages/MatchingPage";
import TestPage from "../pages/TestPage";
import BookmarkedPage from "../pages/BookmarkedPage";
import AdminPage from "../pages/AdminPage"
import QuestionCreatorPage from "../pages/QuestionCreatorPage";
import QuestionUpdaterPage from "../pages/QuestionUpdaterPage";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

export const PAGES = {
  HOME: "home",
  STUDY: "study",
  MATCHING: "matching",
  TEST: "test",
  BOOKMARKS: "bookmarks",
  ADMIN: "admin",
  QUESTION_CREATOR: "question-creator",
  QUESTION_UPDATER: "question-updater",
  SIGNUP: "sign-up",
  SIGNIN: "sign-in",
};

export const FEATURE_ITEMS = [
  {
    id: PAGES.HOME,
    text: "Home",
    path: "/",
    order: 1,
    component: <Home />,
    header: {
      isVisible: false,
    },
    card: {
      isVisible: false,
    },
  },
  {
    id: PAGES.STUDY,
    text: "Study Mode",
    path: "/learn",
    order: 2,
    component: <StudyPage />,
    header: {
      isVisible: true,
      activity: false,
    },
    card: {
      isVisible: true,
      backgroundColor: "rgb(253, 253, 150)",
      description: 'Scrollable list or card deck of all questions + answers. Clean, readable layout for quick review. "Mark as learned" toggle per question.',
    },
  },
  {
    id: PAGES.MATCHING,
    text: "Matching Game",
    path: "/play",
    order: 3,
    component: <MatchingPage />,
    header: {
      isVisible: true,
      activity: false,
    },
    card: {
      isVisible: true,
      backgroundColor: "rgb(253, 253, 256)",
      description: "Interactive matching game where you connect questions with their correct answers. Perfect for memory retention and quick recall practice.",
    },
  },
  {
    id: PAGES.TEST,
    text: "Test Game",
    path: "/quiz",
    order: 4,
    component: <TestPage />,
    header: {
      isVisible: true,
      activity: false,
    },
    card: {
      isVisible: true,
      backgroundColor: "rgb(218, 245, 256)",
      description: "You get a random question from the selected topic(s) and three answer options. Choose the good one!",
    },
  },
  {
    id: PAGES.BOOKMARKS,
    text: "Bookmarked",
    path: "/saved",
    order: 6,
    component: <BookmarkedPage />,
    header: {
      isVisible: true,
      activity: false,
    },
    card: {
      isVisible: true,
      backgroundColor: "rgb(248, 214, 179)",
      description: "Save your favorite questions and challenging topics for later review. Organize your study materials and track questions you want to revisit before your assessment.",
    },
  },
  {
    id: PAGES.ADMIN,
    text: "Admin",
    path: "/admin",
    order: 7,
    component: <AdminPage />,
    header: {
      isVisible: true,
      activity: false,
    },
    card: {
      isVisible: false,
    },
  },
  {
    id: PAGES.QUESTION_CREATOR,
    text: "Create Questions",
    path: "/create",
    order: 8,
    component: <QuestionCreatorPage />,
    header: {
      isVisible: false,
      activity: false,
    },
    card: {
      isVisible: false,
    },
  },
  {
    id: PAGES.QUESTION_UPDATER,
    text: "Update Questions",
    path: "/updater/:id",
    order: 9,
    component: <QuestionUpdaterPage />,
    header: {
      isVisible: false,
      activity: false,
    },
    card: {
      isVisible: false,
    },
  },
  {
    id: PAGES.SIGNUP,
    text: "Sign Up",
    path: "/sign-up",
    order: 10,
    component: <SignUpForm />,
    header: {
      isVisible: false,
      activity: false,
    },
    card: {
      isVisible: false,
    },
  },
  {
    id: PAGES.SIGNIN,
    text: "Sign In",
    path: "/sign-in",
    order: 11,
    component: <SignInForm />,
    header: {
      isVisible: false,
      activity: false,
    },
    card: {
      isVisible: false,
    },
  },
];

export const STUDY_MODULES = [
  {
    id: 1,
    level: "all",
    backgroundColor: "rgb(253, 253, 150)",
    title: "All Module",
    activity: true,
  },
  {
    id: 2,
    level: "progbasics",
    backgroundColor: "rgb(218, 245, 256)",
    title: "Prog Basic",
    activity: false,
  },
  {
    id: 3,
    level: "web",
    backgroundColor: "rgb(253, 253, 256)",
    title: "Web Module",
    activity: false,
  }
];

// ====================================
// HELPER FUNCTIONS
// ====================================

// Get ALL items for routing - returns all feature items for router
export function getAllRoutes() {
  return FEATURE_ITEMS.map(item => ({
    id: item.id,
    text: item.text,
    path: item.path,
    component: item.component,
  }));
}

// Filter for header navigation - returns data for router Links
export function getNavItems(currentPath) {
  return FEATURE_ITEMS.filter(item => item.header.isVisible).map(item => ({
    id: item.id,
    text: item.text,
    path: item.path,
    activity: item.path === currentPath,
    component: item.component,
  }));
}

// for Home Cards - returns data for feature cards
export function getDashboardCards() {
  return FEATURE_ITEMS.filter(item => item.card.isVisible).map(item => ({
    id: item.id,
    path: item.path,
    backgroundColor: item.card.backgroundColor,
    title: item.text,
    description: item.card.description,
    icon: item.card.icon
  }));
}

// for Module types
export function getModules(currentModule) {
  return STUDY_MODULES.map((item) => ({
    id: item.id,
    level: item.level,
    backgroundColor: item.backgroundColor,
    title: item.title,
    activity: item.id === currentModule,
  }));
}
