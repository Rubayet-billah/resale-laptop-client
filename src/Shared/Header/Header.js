import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useRole from "../../Hooks/useRole/useRole";
import CustomContainer from "../../UI/CustomContainer";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user, roleState, logoutUser } = useContext(AuthContext);
  const [role, roleLoader] = useRole(user?.email, roleState);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="hover:text-accent">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog" className="hover:text-accent">
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          {role === "Customer" && (
            <li>
              <Link to="/myorders" className="hover:text-accent">
                My Orders
              </Link>
            </li>
          )}
          {role === "Seller" && (
            <>
              <li>
                <Link to="/myproducts" className="hover:text-accent">
                  My Products
                </Link>
              </li>
              <li>
                <Link to="/addproduct" className="hover:text-accent">
                  Add A Product
                </Link>
              </li>
              <li>
                <Link className="hover:text-accent">My Buyers</Link>
              </li>
            </>
          )}
          {role === "Admin" && (
            <>
              <li>
                <Link to="/dashboard/allsellers" className="hover:text-accent">
                  All Sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allcustomers"
                  className="hover:text-accent"
                >
                  All Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/reportedproducts"
                  className="hover:text-accent"
                >
                  Reported Products
                </Link>
              </li>
            </>
          )}
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="hover:text-accent">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-accent">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <CustomContainer>
        {" "}
        <nav className="px-4 py-4 navbar md:px-12">
          <div className="navbar-start">
            <Link to="/">
              {/* ReSeller */}
              <img className="w-24 lg:w-36 xl:w-44" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="space-x-4 menu menu-horizontal">{menuItems}</ul>
          </div>
          <div className="flex items-center space-x-4 navbar-end">
            {user?.uid ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-accent btn-outline"
              >
                Logout
              </button>
            ) : null}
          </div>
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 space-y-2 bg-white shadow dropdown-content menu rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </nav>
      </CustomContainer>
    </header>
  );
};

export default Header;
