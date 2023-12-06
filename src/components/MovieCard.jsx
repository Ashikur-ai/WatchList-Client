import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { _id, photo } = movie;
    return (
        <div>
            <Link to={`/productDetails/${_id}`}>
                <div className='w-3/4'>
                    <img src={`${photo}`} className='rounded-2xl h-96' />
                </div>
            </Link>
            
        </div>
    );
};

export default MovieCard;