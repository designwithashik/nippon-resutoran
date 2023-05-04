import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const MainLayout = () => {

    return (
        <div>
            <Box py='20px' px={{base:'20px', md: '100px', lg: '165px'}} bgColor='rgba(255, 105, 40, 1)'><NavigationBar /></Box>
            <Box ><Outlet /></Box>
            <Box textColor='white' py='40px' px={{base:'20px', md: '100px', lg: '165px'}} bgColor='rgba(31, 31, 31, 1)'><Footer /></Box>
        </div>
    );
};

export default MainLayout;