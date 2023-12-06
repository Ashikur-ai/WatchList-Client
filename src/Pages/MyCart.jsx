import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CartCard from '../components/CartCard';

const MyCart = () => {
    const loadedItems = useLoaderData();
    const [cartItem, setCartItem] = useState(loadedItems);
    return (
        <div className='bg-neutral'>
            <Helmet>
                <title>WatchList | Cart</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items { cartItem.length }</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        
                        {
                            cartItem.map(item => <CartCard key={item._id} item={item} setCartItem={setCartItem} cartItem={cartItem}></CartCard>)
                        }
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyCart;