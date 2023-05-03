import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Box, Flex, Spinner } from '@chakra-ui/react';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    if(loading) {
        return <Flex justifyContent='center' alignItems='center' h='80vh'>
            <Spinner 
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      /></Flex>

    }
    if (user) {
        return <>{children}</>
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;