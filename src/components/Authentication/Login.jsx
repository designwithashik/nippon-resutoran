import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react';

const Login = () => {
    const { googleLogIn,githubLogIn, logOut } = useContext(AuthContext);
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    const handleGithubLogIn = () => {
        githubLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    return (
        <Flex flexDirection='column' gap='40px'  h='calc(100vh - 242.8px)' alignItems='center' justifyContent='center'>
            <FormControl  w={{ base: '210px', md: '400px' }}>
                <Heading mb='30px' textAlign='center'>Please Log In</Heading>
                <Input mb='20px' placeholder='Enter Email' name='email' required></Input>
                <Input placeholder='Enter Password' name='password' required></Input>
                <Flex justifyContent='center'><Button mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>LOG IN</Button></Flex>
            </FormControl>
            <Text>OR</Text>

            <Flex gap='30px'><Button onClick={handleGoogleLogIn} colorScheme='green'>Sign In With Google</Button>
            <Button onClick={handleGithubLogIn} colorScheme='blackAlpha'>Sign In With Github</Button></Flex>
           

        </Flex>
    );
};

export default Login;