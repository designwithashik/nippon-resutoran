import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Authentication/Login';
import ChefRecipes from "../components/chefs/ChefRecipes";
import Home from '../components/Home'
import PrivateRoute from '../routes/PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login />,
                
            },
            {
                path: 'chefs/:id',
                element: <PrivateRoute><ChefRecipes/></PrivateRoute>,
                loader: ({params})=>fetch(`https://nippon-resutoran-server-designwithashik.vercel.app/chefs/${params.id}`)
            }

        ]
    }
])

export default router;