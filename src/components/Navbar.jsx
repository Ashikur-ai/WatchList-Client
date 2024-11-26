import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

import { BsMoon } from "react-icons/bs";
const Navbar = ({ dark, setDark }) => {

    const { LogOut } = useContext(AuthContext);

    const navLinks = <>

        {/* <li className={dark ? 'text-black' : 'text-white'}><Link className='hover:font-semibold hover:text-white' to="/">Home</Link></li>
        <li className={dark ? 'text-black' : 'text-white'}><Link className='hover:font-semibold hover:text-white' to="/addProduct">Add Movies</Link></li>
        <li className={dark ? 'text-black' : 'text-white'}>
            <Link className='hover:font-semibold hover:text-white' to="/cart">Cart</Link>
        </li> */}


    </>

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('Logout successful')
            })
    }

    const { user } = useContext(AuthContext);

    return (
        <>

            <div className="navbar text-white container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <div className="flex gap-3">
                            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1732639290/ARK%20Limited/ARK%20Technologies/WatchList/eho2iwtr7eeuhefzghrm.png" alt="" className='w-16' />
                            <button className='text-4xl font-bold '>
                                <span className='text-red-700'>Watch</span>
                                <span className={dark ? 'text-black' : 'text-white'}>List</span>
                            </button>
                        </div>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white text-xl font-bold menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className={dark ? 'text-black' : 'text-white'}><button onClick={() => setDark(!dark)}><BsMoon className='text-3xl mr-3'></BsMoon></button></div>
                    <div className="dropdown dropdown-end text-black">
                        {
                            user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-800 avatar">
                                            <div className="w-10 rounded-full">
                                                {
                                                    user ?
                                                        <div className='font-bold text-2xl text-white'>{user.email.slice(0, 1)}</div>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <a className="justify-between">
                                                    {user.displayName ? user.displayName : user.email}

                                                </a>
                                            </li>
                                            <li onClick={handleLogOut}><a>Logout</a></li>
                                            <li onClick={handleLogOut}><a>Dashboard</a></li>
                                        </ul>
                                    </div>
                                </>


                                :

                                <Link to="/login" className='btn btn-primary'>
                                    Login
                                </Link>
                        }


                    </div>
                </div>
            </div>
        </>



    );
};

export default Navbar;