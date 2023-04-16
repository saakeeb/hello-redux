import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import TopRated from '../TopRated/TopRated';
import Cart from '../Cart/Cart';
import Layouts from '../Layouts/Layouts';

const RouterNav = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/top-rated",
                element: <TopRated />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            },
        ],
    },
]);

export default RouterNav;