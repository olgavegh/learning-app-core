import './App.css';

import { Routes, Route } from "react-router-dom";
import { getAllRoutes } from "./constants/navigationData";
import Layout from "./pages/layouts/Layout"
import Home from "./pages/Home"
import AuthProvider from './context/AuthProvider';

function App() {

  return (

    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {getAllRoutes().map((page, index) => (
            <Route key={index} path={page.path} element={page.component} />
          ))}
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
