import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({movie}) => {
    const { photo, name, brand, type, price, rating, _id } = movie;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            <span className='text-3xl'>{name}</span>
                            <br />
                            <span>{brand}</span>
                            <br />
                            <span>{type}</span>
                            <br />
                            <span>Rating: {rating} out of 5</span>
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            $ {price}
                        </p>
                    </div>
                    
                </div>
                <div className="p-6 pt-0 flex justify-between">
                    <Link to={`/productDetails/${_id}`}>
                        <button className='btn btn-primary bg-neutral'>Details</button>
                    </Link>
                    
                    <Link to={`/updateProduct/${_id}`}>
                        <button className='btn btn-primary bg-neutral'>Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;