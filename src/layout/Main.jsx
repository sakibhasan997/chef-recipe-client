import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';

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
                            <Banner/>
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
                <div className="footer">

                </div>
            </div>
        </>
    );
};

export default Main;