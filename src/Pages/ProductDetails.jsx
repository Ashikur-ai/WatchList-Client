import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const movie = useLoaderData();
    const { photo, photo_bg, name, brand, price, type, rating, description } = movie;

    const handleCart = (event) => {
        event.preventDefault();
        const c_photo = photo;
        const c_photo_bg = photo_bg;
        const c_name = name;
        const c_brand = brand;
        const c_type = type;
        const c_price = price;
        const c_rating = rating;
        const c_description = description;
        const cartItem = { c_photo, c_photo_bg, c_name, c_brand, c_type, c_price, c_rating, c_description };
        console.log(cartItem);

        // send data to server 
        fetch('https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Movie successfully added to cart')
            })
    }
    return (
        <div className='bg-neutral'>
            <Helmet>
                <title>
                    WatchList | Movie Details
                </title>
            </Helmet>
            <Navbar></Navbar>
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-white">

                        <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-5">
                            <div className='w-3/4'>
                                <h1 className="mb-5 text-3xl md:text-7xl font-bold">{name}</h1>
                                <p className='text-2xl font-bold'>{brand}</p>
                                <p className='font-bold'>Price: {price}$</p>
                                <p className='font-bold'>{type}</p>
                                <p className='text-green-700 font-bold'>Reviews: {rating} out of 5</p>
                                <p className="my-5">{description}</p>
                                <div className='flex gap-4'>

                                    <button onClick={handleCart} className=' btn btn-primary'>Add to Cart</button>
                                </div>
                            </div>
                            <div className="card  shadow-xl rounded-lg">

                                <img src={photo} className='rounded-2xl h-96' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className=' container mx-auto'>
                <img src={photo_bg} alt="" className='rounded-2xl w-3/4' />
            </div>
        </div>
    );
};

export default ProductDetails;