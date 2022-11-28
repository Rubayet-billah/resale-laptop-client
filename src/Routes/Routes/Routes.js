import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Blog from "../../pages/Blog/Blog";
import AllCustomers from "../../pages/Dashboard/Admin/AllCustomers/AllCustomers";
import AllSellers from "../../pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedItems from "../../pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyBookings from "../../pages/Dashboard/Customer/MyBookings/MyBookings";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../pages/Dashboard/Payment/Payment";
import AddProduct from "../../pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../pages/Dashboard/Seller/MyProducts/MyProducts";
import Login from "../../pages/Register/Login/Login";
import Register from "../../pages/Register/Register/Register";
import Shop from "../../pages/Shopping/Shop/Shop";
import CustomerRoute from "../CustomerRoute/CustomerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
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
                path: '/products/:id',
                element: <PrivateRoute><Shop></Shop></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/myorders',
                element: <CustomerRoute><MyBookings></MyBookings></CustomerRoute>
            },
            {
                path: '/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allcustomers',
                element: <AllCustomers></AllCustomers>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <ReportedItems></ReportedItems>
            },
        ]
    }
])

export default router;