import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../Hooks/useRole/useRole';

const Header = () => {
    const { user, roleState, logoutUser } = useContext(AuthContext);
    const [role, roleLoader] = useRole(user?.email, roleState);
    // console.log(roleState, 'header line 9')
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }

    // if (roleLoader) {
    //     return <></>
    // }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ? <>
                {role === 'Customer' && <li><Link to='/myorders'>My Orders</Link></li>}
                {role === 'Seller' && <>
                    <li><Link to='/myproducts'>My Products</Link></li>
                    <li><Link to='/addproduct'>Add A Product</Link></li>
                    <li><Link>My Buyers</Link></li>
                </>}
                {role === 'Admin' && <>
                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                    <li><Link to='/dashboard/allcustomers'>All Customers</Link></li>
                    <li><Link to='/dashboard/reportedproducts'>Reported Products</Link></li>
                </>}
            </> : <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li></>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-200 md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">ReSeller</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <button onClick={handleLogout} className='btn btn-sm btn-accent btn-outline'>Logout</button> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;