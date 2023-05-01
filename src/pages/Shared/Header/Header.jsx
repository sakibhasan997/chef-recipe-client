import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='pt-5'>
            <div className="navbar bg-white my-container px-3 rounded-lg shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/' >HOME</Link>
                            <Link to='/' >BLOGS</Link>
                            <Link to='/' >ABOUT</Link>
                        </ul>
                    </div>
                    <img className='w-32' src="/public/site-logo/04_main_home (2).jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2  ">
                        <Link to='/' className='px-2 font-semibold text-lg hover:text-yellow-500' >HOME</Link>
                        <Link to='/' className='px-2 font-semibold text-lg hover:text-yellow-500' >BLOGS</Link>
                        <Link to='/' className='px-2 font-semibold text-lg hover:text-yellow-500' >ABOUT</Link>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn btn-warning">Login</a>
                </div>
                <br />
                <div className='ms-5'>
                    <FaUserCircle className='text-[45px]' />
                </div>

            </div>
        </div>
    );
};

export default Header;