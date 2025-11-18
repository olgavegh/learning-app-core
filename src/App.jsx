import './App.css';

import { Routes, Route } from "react-router-dom";
import { getAllRoutes } from "./constants/navigationData";
import Layout from "./pages/layouts/Layout"
import Home from "./pages/Home"

function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {getAllRoutes().map((page, index) => (
          <Route key={index} path={page.path} element={page.component} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
