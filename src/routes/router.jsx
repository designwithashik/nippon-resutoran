import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import ChefRecipes from "../components/chefs/ChefRecipes";
import Home from '../components/Home'
import PrivateRoute from '../routes/PrivateRoute'
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
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
                path: 'sign-up',
                element: <Register/>
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefRecipes/></PrivateRoute>,
                loader: ({params})=>fetch(`https://nippon-resutoran-server-designwithashik.vercel.app/chef/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog/>
            }
            

        ]
    }
])

export default router;