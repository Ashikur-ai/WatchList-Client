import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MyCart from '../Pages/MyCart';
import PrivateRoute from './PrivateRoute';
import AddProduct from '../Pages/AddProduct';
import UpdateProduct from '../Pages/UpdateProduct';
import ProductDetails from '../Pages/ProductDetails';
import CategoryPage from '../Pages/CategoryPage';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/movie')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                loader: () => fetch('https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/cart')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/movie/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/movie/${params.id}`)
            },
            {
                path: '/category/:brand',
                element: <CategoryPage></CategoryPage>,
                loader: ({ params }) => fetch(`https://watch-list-server-gq60kn91n-ashikurs-projects.vercel.app/category/${params.brand}`)
            }


        ]
    },
]);

export default Routes;