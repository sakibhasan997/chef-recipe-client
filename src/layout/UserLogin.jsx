import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Home/Footer/Footer';

const UserLogin = () => {
    return (
        <div>
            <Header/>
            <div className=' my-container'>
            <Outlet/>
            </div>
            <div className='footer'>
            <Footer/>
            </div>
        </div>
    );
};

export default UserLogin;