import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    const links = <>
        <NavLink to={'/'}>
            <li className='m-2'><button className='btn btn-outline btn-success border-none text-black'>Home</button></li>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='m-2'><button className='btn btn-outline btn-success border-none text-black'>About</button></li>
        </NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Amar BoiGhor</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className=" navbar-end">
                    <a className="btn bg-[#23BE0A] md:mr-4 text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;