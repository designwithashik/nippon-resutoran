import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Box, Button, Flex, FormControl, Heading, Input, Text, useLatestRef } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { googleLogIn, githubLogIn, logOut, emailLogIn, error, setError } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleEmailLogIn = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        emailLogIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, {replace: true})
            }
            )
        .catch(error=>setError('Invalid email or password !!'))
        form.reset()
        
    }
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                 console.log(result.user)
                 navigate(from, {replace: true})
            })
            .catch(error => console.log(error))
        
    }
    const handleGithubLogIn = () => {
        githubLogIn()
        .then(result => {console.log(result.user)
            navigate(from, {replace: true})}
            )
            .catch(error => console.log(error))
        
    }
    return (
        <Flex my={{base: '120px', md: '0px'}} mx={{base: '20px', md: '0px'}} flexDirection='column' gap='10px'  h={{md:'calc(100vh - 252.8px)'}} alignItems='center' justifyContent='center'>
            <Box  w={{ base: '210px', md: '400px' }}>
                <Heading mb='30px' textAlign='center'>Please Log In</Heading>
                <form onSubmit={handleEmailLogIn}>
                    <Input mb='20px' placeholder='Enter Email' type='email' name='email' required></Input>
                    <Input placeholder='Enter Password' type='password' name='password' required></Input>
                    <Text fontWeight='medium' color='red.600'>{error}</Text>
                    <Flex justifyContent='center'><Button type='submit' mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>LOG IN</Button></Flex>
                </form>
            </Box>
            <Text>Don't Have an Account? <Link to='/sign-up'><Text as='span' fontWeight='bold' color='rgba(255, 105, 40, 1)'>Sign Up Here</Text></Link></Text>

            <Text>OR</Text>

            <Flex gap='30px' flexDir={{ base:'column', md: 'row'}}><Button onClick={handleGoogleLogIn} colorScheme='green'>Sign In With Google</Button>
            <Button onClick={handleGithubLogIn} colorScheme='blackAlpha'>Sign In With Github</Button></Flex>
           

        </Flex>
    );
};

export default Login;