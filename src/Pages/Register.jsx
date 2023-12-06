import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);

    const [isShow, setIsShow] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();
    


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return toast.error('The password is less than 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error("don't have a capital letter")
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]+/.test(password)) {
            return toast.error("don't have a special character")
        }

        createUser(email, password)
            .then(result => {
                {
                    location?.state ? location.state :
                        navigate('/')
                }
                toast.success('Successfully Registered')
                
            })
            .then(error => {
                
                toast.error(error.message)
        })
    }

    const googleRegister = () => {
        googleSignIn()
            .then(result => {
                {
                    location?.state ? location.state :
                        navigate('/')
                }
            toast.success('Registration successful')
            })
            .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-neutral">
            <Helmet>
                <title>
                    WatchList | Register
                </title>
            </Helmet>


            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Link to="/">
                        <p className='text-center mt-4 text-2xl font-bold'><span className='text-red-600'>Watch</span>List</p>
                    </Link>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={isShow ? "password" : "text"} name='password' placeholder="password" className="input input-bordered" required />
                                {
                                    isShow ?
                                        <FaEye onClick={() => setIsShow(!isShow)} className='absolute top-4 right-6'></FaEye>
                                        :
                                        <FaEyeSlash onClick={() => setIsShow(!isShow)} className='absolute top-4 right-6'></FaEyeSlash>
                                }

                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer text-blue-700"><NavLink to="/login">Login</NavLink></span>
                            </p>
                        </div>
                    </form>
                    <div className="divider ">OR</div>

                    <p className="text-center text-sm">Continue with
                    </p>

                    <div className='text-center'>
                        <button onClick={googleRegister} className=" btn btn-outline mb-9  rounded-full"> <FcGoogle className='text-3xl'></FcGoogle> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;