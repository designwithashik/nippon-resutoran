import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <Flex>
            <Text fontWeight='bold' flexGrow='1' fontSize='24px' color='white'>Nippon Resutoran</Text>
            <Flex alignItems='center' gap={{base:'30px', md:'48px', lg:'78px'}}>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
                {user ? <Image alt='user picture' title={user.displayName} src={user.photoURL} h='40px' w='40px' borderRadius='full'></Image> : <Link to='/login'><Button color='rgba(255, 105, 40, 1)'>Login</Button></Link>}
                {user && <Button onClick={logOut} color='rgba(255, 105, 40, 1)'>Log Out</Button>}
            </Flex>
        </Flex>
    );
};

export default NavigationBar;