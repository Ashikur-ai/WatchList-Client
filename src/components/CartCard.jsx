import React from 'react';
import toast from 'react-hot-toast';

const CartCard = ({ item, setCartItem, cartItem }) => {

    const handleDelete = id => {
        fetch(`https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Removed from cart')
                    const remaining = cartItem.filter(user => user._id !== _id)
                    setCartItem(remaining)
                }
            })
    }

    const { _id, c_photo, c_name, c_brand, c_description, c_price, c_type } = item;
    return (
        <div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={c_photo} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{c_name}</h2>
                        <p className="mt-1 text-xl font-bold text-gray-700">{c_brand}</p>
                        <p className="mt-1 text-xl font-bold text-green-700">{c_type}</p>
                        <p className="mt-1 text-xs text-gray-700">{c_description.slice(0, 300)}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                        <div className="flex items-center space-x-4">
                            <p className="text-sm">${c_price}</p>
                            <button onClick={() => handleDelete(_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;