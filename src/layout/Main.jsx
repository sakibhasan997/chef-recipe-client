import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';
import Footer from '../pages/Home/Footer/Footer';


const Main = () => {
    return (
        <>
            
                <div className='main'>
                    <div className="bg-banner">
                        <div>
                            <div>
                                <Header />
                            </div>
                            <div>
                                <Banner />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            
        </>
    );
};

export default Main;