import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';
import DetailsBanner from '../pages/Shared/DetailsBanner/DetailsBanner';

const ChefCategory = () => {
    return (
        <div>
            <div className='bg-banner-2'>
                <Header />
                <DetailsBanner />
            </div>
            <Outlet />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default ChefCategory;