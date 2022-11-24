import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Login from "../../pages/Register/Login/Login";
import Register from "../../pages/Register/Register/Register";
import SHop from "../../pages/Shopping/Shop/SHop";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../../Layout/MainLayout/MainLayout");
const { default: ErrorPage } = require("../../pages/ErrorPage/ErrorPage");
const { default: Home } = require("../../pages/Homepage/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <SHop></SHop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;