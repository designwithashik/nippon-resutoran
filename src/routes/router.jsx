import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Authentication/Login';
import Home from '../components/Home'

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
                
            }

        ]
    }
])

export default router;