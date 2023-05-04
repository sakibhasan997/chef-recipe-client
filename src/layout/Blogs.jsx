import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className="header bg-blue-100 pb-10">
                <Header />
                <h1  className='font-bold mt-5 text-3xl text-[#1A1919] text-center'>Question & Answer</h1>
            </div>
            <Outlet />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Blogs;