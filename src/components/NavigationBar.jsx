import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Flex>
            <Text fontWeight='bold' flexGrow='1' fontSize='24px' color='white'>Nippon Resutoran</Text>
            <Flex alignItems='center' gap={{base:'30px', md:'48px', lg:'78px'}}>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
                {user ? <Image h='60px' w='60px' borderRadius='full'></Image>:<Link to='/login'><Button>Login</Button></Link>}
            </Flex>
        </Flex>
    );
};

export default NavigationBar;