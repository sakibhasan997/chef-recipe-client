import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Blogs;