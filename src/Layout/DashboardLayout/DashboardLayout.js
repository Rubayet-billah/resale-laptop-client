import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='min-h-[90vh] mt-12 container mx-auto'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default DashboardLayout;