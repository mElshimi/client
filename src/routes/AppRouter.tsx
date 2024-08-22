import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AboutUs from "../pages/AboutUs";
import Booking from "../pages/Booking";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Trip from "../pages/Trip";
import TripData from "../pages/admin/TripData";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import AdminCategories from "../pages/admin/AdminCategories";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminTrips from "../pages/admin/AdminTrips";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminBooked from "../pages/admin/AdminBooked";
import CategoryData from "../pages/admin/CategoryData";
import Explore from "../pages/Explore";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/:category",
          element: <Category />,
          loader: ({ params }) => {
            if (
              typeof params.category !== "string" ||
              !/^[a-z-]+$/i.test(params.category)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }
            return true;
          },
        },
        {
          path: "categories/:category/:id",
          element: <Trip />,
          loader: ({ params }) => {
            if (
              typeof params.category !== "string" ||
              !/^[a-z-]+$/i.test(params.category)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category of trip not found",
                status: 400,
              });
            }

            return true;
          },
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "booking",
          element: <Booking />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <UserLogin />,
        },
        {
          path: "login",
          element: <UserLogin />,
        },
        {
          path: "sing-up",
          element: <UserRegister />,
        },
        {
          path: "admin/login",
          element: <AdminLogin />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <AdminUsers />,
        },
        {
          path: "trips",
          element: <AdminTrips />,
        },

        {
          path: "categories",
          element: <AdminCategories />,
        },
        {
          path: "booked",
          element: <AdminBooked />,
        },
        {
          path: "trip-data",
          element: <TripData />,
        },
        {
          path: "category-data",
          element: <CategoryData />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
