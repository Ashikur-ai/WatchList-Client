import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4 container mx-auto justify-center items-center'>
            <Link to="/category/Marvel Studios">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Marvel Studios</p>
                    <figure><img src="https://i.ibb.co/VmCPZQm/marvel.jpg" className='w-full rounded-2xl' alt="Shoes" /></figure>

                </div>
            </Link>
            <Link to="/category/Fox Studios">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Fox Studios</p>
                    <figure><img src="https://i.ibb.co/LYQ1KRV/fox.jpg" className='w-full rounded-2xl' alt="Shoes" /></figure>

                </div>
            </Link>
            <Link to="/category/Disney">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Disney Movies</p>
                    <figure><img src="https://i.ibb.co/fnz2gd8/disnep.jpg" className='w-full rounded-2xl' alt="Shoes" /></figure>

                </div>
            </Link>
            <Link to="/category/Netflix">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Netflix Movies</p>
                    <figure><img src="https://i.ibb.co/fr7C7qp/netflix.jpg" className='w-full rounded-2xl' alt="Shoes" /></figure>

                </div>
            </Link>
            <Link to="/category/Yash Raj Flim">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Yash Raj Flims</p>
                    <figure><img src="https://i.ibb.co/mHbF1Mr/Yashraj-logo1.png" className='w-full rounded-2xl' alt="Shoes" /></figure>

                </div>
            </Link>
            <Link to="/category/WB">
                <div className="card shadow-xl">
                    <p className='text-white text-center'>Warner Bros</p>
                    <figure><img src="https://i.ibb.co/XxWLg0N/wb.png" className='w-full rounded-2xl' alt="Shoes" /></figure>
                </div>
            </Link>
            
            
        </div>
    );
};

export default Category;