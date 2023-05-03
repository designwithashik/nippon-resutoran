import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const ErrorPage = () => {
    const errorImage ='https://i.ibb.co/mvRKk3q/Pngtree-vector-cartoon-404-error-page-2429070-1.png'
    return (
        <Flex h='100vh' justifyContent='center' alignItems='center'> 
            <Image width='35%' src={errorImage} />
        </Flex>
    );
};

export default ErrorPage;