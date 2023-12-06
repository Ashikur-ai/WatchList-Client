
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const movie = useLoaderData();
    const { _id, photo, photo_bg, name, brand, type, price, rating, description } = movie;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const photo_bg = form.photo_bg.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedMovie = { photo, photo_bg, name, brand, type, price, rating, description };
        console.log(updatedMovie);

        fetch(`https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/movie/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Movie successfully updated')
                }
            })
    }

    return (
        <div>
            <div className="bg-neutral ">
                <Helmet>
                    <title>WatchList | UpdateProduct</title>
                </Helmet>
                <Navbar></Navbar>
                <section className="bg-neutral  dark:bg-gray-900">
                    <div className="py-8 text-white px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-5xl text-center font-bold "><span className="text-red-700">Update </span>Movie</h2>
                        <form onSubmit={handleUpdateProduct} className="text-white" action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                {/* photo */}
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium  ">Movie Image</label>
                                    <input type="text" name="photo" defaultValue={photo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter thumbnail url" required="" />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium  ">Movie Background</label>
                                    <input type="text" name="photo_bg" defaultValue={photo_bg} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter background image url" required="" />
                                </div>
                                {/* Name  */}
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium ">Movie Name</label>
                                    <input type="text" name="name" defaultValue={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Movie name" required="" />
                                </div>
                                {/* Brand  */}
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-medium ">Studio/Brand</label>
                                    <input type="text" name="brand" defaultValue={brand} id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ente Studio Name" required="" />
                                </div>
                                {/* type  */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Type</label>
                                    <input type="text" name="type" defaultValue={type} id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="eg. Action, Romance...." required="" />
                                </div>
                                {/* price  */}
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-medium ">Price</label>
                                    <input type="text" name="price" defaultValue={price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="eg. $2" required="" />
                                </div>

                                {/* rating  */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Rating</label>
                                    <input type="text" name="rating" defaultValue={rating} id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1-5" required="" />
                                </div>
                                {/* description  */}
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium ">Description</label>
                                    <textarea id="description" name="description" defaultValue={description} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn mt-3 btn-primary">
                                Update Movie
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateProduct;