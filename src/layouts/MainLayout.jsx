import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const MainLayout = () => {

    return (
        <div>
            <Box padding='20px' bgColor='rgba(255, 105, 40, 1)'><NavigationBar /></Box>
            <Box ><Outlet /></Box>
            <Box textColor='white' padding='35px' bgColor='rgba(31, 31, 31, 1)'><Footer /></Box>
        </div>
    );
};

export default MainLayout;