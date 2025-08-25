// HomeTemplate
import HomePage from "../pages/HomeTemplate/HomePage";
import HomeTemplate from "../pages/HomeTemplate";
import AboutPage from "../pages/HomeTemplate/AboutPage";
import ListMoviePage from "../pages/HomeTemplate/ListMoviePage";
import MovieDetailsPage from "../pages/HomeTemplate/MovieDetailsPage";
import NewsPage from "../pages/HomeTemplate/NewsPage";
import LoginPage from "../pages/HomeTemplate/LoginPage";
import RegisterPage from "../pages/HomeTemplate/RegisterPage";
// AdminTemplate
import AdminTemplate from "../pages/AdminTemplate";
import DashBoard from "../pages/AdminTemplate/Dashboard";
import AddUser from "../pages/AdminTemplate/AddUser";
import { BrowserRouter, Route } from "react-router-dom";
import MovieManagement from "../pages/AdminTemplate/MovieManagement";
import AuthPage from "../pages/AdminTemplate/AuthPage";
import AddMovie from "../pages/AdminTemplate/AddMovie";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "about",
        element: AboutPage,
      },
      {
        path: "list-movie",
        element: ListMoviePage,
      },
      {
        path: "movie-details/:movieId",
        element: MovieDetailsPage,
      },
      {
        path: "news",
        element: NewsPage,
      },
      {
        path: "login",
        element: LoginPage,
      },
      {
        path: "register",
        element: RegisterPage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    nested: [
      {
        path: "dashboard",
        element: DashBoard,
      },
      {
        path: "add-user",
        element: AddUser,
      },
      {
        path: "movies-management",
        element: MovieManagement,
      },
      {
        path: "movies-management/add-movie",
        element: AddMovie,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
    nested: [],
  },
];

export const generateRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
