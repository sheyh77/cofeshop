import HomePage from "../layout/HomePage";
import HomePageAdmin from "../admin/layout/HomePage";
import AboutUs from "../pages/AboutUs";
import Cofe from "../pages/Cofe";
import Contact from "../pages/Contact";
import Desert from "../pages/Desert";
import Location from "../pages/Location";
import ShoppingCart from "../pages/ShoppingCart";
import Tea from "../pages/Tea";
import ProtectedRoute from "../admin/auth/ProtectedRoute";
import LoginAdmin from "../admin/auth/LoginAdmin";
import Login from "../auth/Login";
import Register from "../auth/Register";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cofe",
    element: <Cofe />,
  },
  {
    path: "/desert",
    element: <Desert />,
  },
  {
    path: "/tea",
    element: <Tea />,
  },
  {
    path: "/shopping",
    element: <ShoppingCart />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/*",
    element: (
      <ProtectedRoute>
        <HomePageAdmin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin-login",
    element: <LoginAdmin />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
];
