import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Box, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
    const { googleLogIn, githubLogIn, logOut } = useContext(AuthContext);
    const handleEmailLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        
    }
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
        <Flex flexDirection='column' gap='10px'  h='calc(100vh - 242.8px)' alignItems='center' justifyContent='center'>
            <Box  w={{ base: '210px', md: '400px' }}>
                <Heading mb='30px' textAlign='center'>Please Log In</Heading>
                <form onSubmit={handleEmailLogIn}>
                    <Input mb='20px' placeholder='Enter Email' type='email' name='email' required></Input>
                    <Input placeholder='Enter Password' type='password' name='password' required></Input>
                    <Flex justifyContent='center'><Button type='submit' mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>LOG IN</Button></Flex>
                </form>
            </Box>
            <Text>Don't Have an Account? <Link to='/sign-up'><Text as='span' fontWeight='bold' color='rgba(255, 105, 40, 1)'>Sign Up Here</Text></Link></Text>

            <Text>OR</Text>

            <Flex gap='30px'><Button onClick={handleGoogleLogIn} colorScheme='green'>Sign In With Google</Button>
            <Button onClick={handleGithubLogIn} colorScheme='blackAlpha'>Sign In With Github</Button></Flex>
           

        </Flex>
    );
};

export default Login;