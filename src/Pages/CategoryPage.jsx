import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Carousel } from "@material-tailwind/react";
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';


const CategoryPage = () => {
    const movies = useLoaderData();
    return (
        <div className='bg-neutral'>
            <Helmet>
                <title>
                    WatchList | Category
                </title>
            </Helmet>
            <Navbar></Navbar>
            {/* header  */}
            <div className='grid grid-rows-1 lg:grid-cols-4 items-center container mx-auto'>
                <div className='col-span-2 p-5'>
                    {
                        movies.length ? 
                            <p className='text-4xl font-bold text-white'>
                                <span className='text-7xl'>Watch Anytime, Anywhere</span>
                                <br />
                                <br />
                                Discover the magic of cinema at our website, where you can experience silver screen sensations, epic film extravaganzas, and streaming sensations all in one place!
                            </p>
                            :
                            <span className='text-7xl text-white font-bold'>Sorry! <br /><br /> We have No movies available for this Studios right now</span>
                    
                    }
                    
                    
                </div>
                <div className='col-span-2'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="hero ">
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-white">

                                    <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-5">

                                        <div className="card  shadow-xl rounded-lg">

                                            <img src="https://i.ibb.co/tJ9ykrW/ironman.jpg" className='rounded-2xl' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="hero min-h-screen" >
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-white">

                                    <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-5">

                                        <div className="card  shadow-xl rounded-lg">

                                            <img src="https://i.ibb.co/9ZVFTs8/bang.jpg" className='rounded-2xl' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="hero min-h-screen" >
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-white">

                                    <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-5">

                                        <div className="card  shadow-xl rounded-lg">

                                            <img src="https://i.ibb.co/pLrZwFt/black-Panther.jpg" className='rounded-2xl' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 p-4'>
                {
                    movies.map(movie => <CategoryCard key={movie._id} movie={movie}></CategoryCard>)
                }
            </div>
            
            
            
            

            

            
        </div>
    );
};

export default CategoryPage;