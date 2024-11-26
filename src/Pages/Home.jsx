import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Category from '../components/Category';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Home = () => {
    window.scrollTo(0, 0);
    const movies = useLoaderData();
    const [dark, setDark] = useState(true);
    
    return (
        <div className={dark ? 'bg-base-100' : 'bg-neutral'}>
            <Helmet>
                <title>WatchList | Home</title>
            </Helmet>
            <Navbar dark={dark} setDark={setDark}></Navbar>
            {/* banner */}
            <Banner></Banner>

            {/* category */}
            <div className='container mx-auto p-5 ' >
                <h1 className='my-5 text-center text-4xl font-bold'> <span className={dark ? 'text-black': 'text-white'}>Studios We Work With</span></h1>
                <Category></Category>
            </div>

            {/* latest movie  */}
            <p className='text-white my-4 text-3xl container mx-auto '><span className={dark ? 'text-black' : 'text-white'}>Latest Movies</span></p>
            <div className='container p-5 mx-auto text-white mt-6 grid grid-cols-2 md:grid-cols-4 gap-5'>
                {/* {
                    movies?.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                } */}
            </div>
            
           

            {/* kid section  */}
            <p className='text-white my-4 text-3xl container mx-auto '><span className={dark ? 'text-black' : 'text-white'}>Kid Section</span></p>

            <section className='container mx-auto p-5 text-black'>
                <div className='flex gap-5 flex-col-reverse align-middle md:flex-row justify-between items-center '>
                    <div>
                        <img src="https://i.ibb.co/hdv2tDS/child.webp" className='w-3/4' alt="" />
                    </div>
                    <div className=''>
                        <p className='text-xl md:text-3xl'><span className={dark ? 'text-black' : 'text-white'}>Create a free account for your kids.</span><br></br>
                            <span className='text-2xl md:text-4xl font-bold'><span className={dark ? 'text-black' : 'text-white'}>Let them spend time with there favourite character.</span></span> <br />
                            <span className='text-violet-700 font-bold text-3xl  md:text-6xl'>Learn_Fun_Enjoy</span></p>
                    </div>
                    
                </div>
            </section>
            



        </div>
    );
};

export default Home;