import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../Hooks/useRole/useRole';
import Spinner from '../Spinner/Spinner';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [role, roleLoader] = useRole(user?.email);

    // console.log(user)

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        {
            user?.uid ? <>
                {role === 'Customer' && <li><Link to='/myorders'>My Orders</Link></li>}
                {role === 'Seller' && <>
                    <li><Link to='/myproducts'>My Products</Link></li>
                    <li><Link to='/addproduct'>Add A Product</Link></li>
                    <li><Link>My Buyers</Link></li>
                </>}
                {role === 'Admin' && <>
                    <li tabIndex={0}>
                        <Link to='/dashboard'>Dashboard<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                            <li><Link to='/dashboard/allcustomers'>All Customers</Link></li>
                        </ul>
                    </li></>}
            </> : <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li></>
        }
    </>
    // if (roleLoader) {
    //     return
    // }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Reseller</Link>
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