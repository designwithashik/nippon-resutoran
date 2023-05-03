import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Flex, FormControl, Heading, Input } from '@chakra-ui/react';

const Login = () => {
    const { googleLogIn, logOut } = useContext(AuthContext);
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    return (
        <Flex  h='calc(100vh - 242.8px)' gap='2px' alignItems='center' justifyContent='center'>
            <FormControl  w={{ base: '210px', md: '400px' }}>
                <Heading mb='30px' textAlign='center'>Please Log In</Heading>
                <Input mb='20px' placeholder='Enter Email' name='email' required></Input>
                <Input placeholder='Enter Password' name='password' required></Input>
                <Flex justifyContent='center'><Button mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>LOG IN</Button></Flex>
            </FormControl>
            
           

        </Flex>
    );
};

export default Login;