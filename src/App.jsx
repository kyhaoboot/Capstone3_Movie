import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// HomeTemplate
import HomeTemplate from "./pages/HomeTemplate";
import HomePage from "./pages/HomeTemplate/HomePage";
import AboutPage from "./pages/HomeTemplate/AboutPage";
// AdminTemplate
import AdminTemplate from "./pages/AdminTemplate";
import ListMoviePage from "./pages/HomeTemplate/ListMoviePage";
import DashBoard from "./pages/AdminTemplate/Dashboard";
import AddUser from "./pages/AdminTemplate/AddUser";

import { generateRoutes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {generateRoutes()}
        {/* Home Template - Localhost:5173*/}
        {/* <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route> */}
        {/* Admin Template */}
        {/* <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="add-user" element={<AddUser />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
