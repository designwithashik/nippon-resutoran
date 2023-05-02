import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    }
])

export default router;