import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className=''>
            <Toaster></Toaster>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;