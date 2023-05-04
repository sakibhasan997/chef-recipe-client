import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className='pt-5'>
            <div className="navbar bg-white my-container px-3 rounded-lg shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' >HOME</NavLink>
                            <NavLink to='/blogs' >BLOGS</NavLink>
                            <NavLink to='/about' >ABOUT</NavLink>
                        </ul>
                    </div>
                    <img className='w-32' src="/public/site-logo/04_main_home (2).jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2  ">
                        <NavLink to='/' className='px-2 font-semibold text-lg hover:text-yellow-500' >HOME</NavLink>
                        <NavLink to='/blogs' className='px-2 font-semibold text-lg hover:text-yellow-500' >BLOGS</NavLink>
                        <NavLink to='/about' className='px-2 font-semibold text-lg hover:text-yellow-500' >ABOUT</NavLink>
                    </ul>
                </div>


                <div className="navbar-end">
                    {user ?
                        <>
                            <button title='helle bro' onClick={handleLogOut} className="btn btn-warning" >LogOut</button>
                        </>
                        :
                        <Link  to='/login' className="btn btn-warning">Login</Link>
                    }
                </div>

                <br />
                {
                    user && <div className='ms-5'>
                       <button> <FaUserCircle title={user.displayName} className='text-[45px]' /></button>
                    </div>
                }

            </div>
        </div>
    );
};

export default Header;