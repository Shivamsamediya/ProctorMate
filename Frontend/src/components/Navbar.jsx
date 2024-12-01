// eslint-disable-next-line no-unused-vars
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    
    // Check if user is logged in by looking for a token
    const token = localStorage.getItem('token'); 
    
    const handleLogout = () => {
        // Clear token and navigate to login page
        localStorage.removeItem('token');
        localStorage.removeItem('Admin');
        
        toast.success("Logout Successfully!!");
        
        setTimeout(()=>{
            navigate("/");
        },500);
    };

    const navItems = (
        <>
            <li>
                <a href='/' className='text-md font-medium hover:text-blue-600 transition-colors duration-300'>Home</a>
            </li>
            <li>
                <a href='/allocate' className='text-md font-medium hover:text-blue-600 transition-colors duration-300'>Allocate</a>
            </li>
            <li>
                <a href='/dashboard' className='text-md font-medium hover:text-blue-600 transition-colors duration-300'>Dashboard</a>
            </li>
            <li>
                <a href='/contact' className='text-md font-medium hover:text-blue-600 transition-colors duration-300'>Contact</a>
            </li>
            <li>
                <a href='/about-us' className='text-md font-medium hover:text-blue-600 transition-colors duration-300'>About Us</a>
            </li>
        </>
    );

    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <nav className="navbar bg-white shadow-md py-2">
                <div className="navbar-start">
                    {/* Dropdown for Mobile */}
                    <div className="dropdown lg:hidden">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost"
                            aria-label="Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    {/* Logo */}
                    <a href="/" className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-300">
                        ProctorMate
                    </a>
                </div>

                {/* Center Menu for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-6">
                        {navItems}
                    </ul>
                </div>

                {/* Authentication buttons */}
                <div className="navbar-end">
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="btn bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 text-sm sm:text-md">
                            Logout
                        </button>
                    ) : (
                        <a href='/login' className="btn bg-gray-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 text-sm sm:text-md">
                            Login
                        </a>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
