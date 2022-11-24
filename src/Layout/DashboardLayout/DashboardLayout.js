import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;