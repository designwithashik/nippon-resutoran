import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Box, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Register = () => {
    const { googleLogIn, githubLogIn, logOut, emailSignUp, error, setError } = useContext(AuthContext);
    const handleEmailSignUp = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password)
        if (password.length < 6) {
            setError('password length must be least 6 characters')
            return
        }
        emailSignUp(email, password)
            .then(result => console.log(result.user))
            .catch(error => setError('Please Try Again '))
        form.reset()
    }
    const handleGoogleSignUp = () => {
        googleLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    const handleGithubSignUp = () => {
        githubLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    return (
        <Flex flexDirection='column' gap='10px'  h='calc(100vh - 242.8px)' alignItems='center' justifyContent='center'>
            <Box  w={{ base: '210px', md: '400px' }}>
                <Heading mb='30px' textAlign='center'>Sign Up Now</Heading>
                <form onSubmit={handleEmailSignUp}>

                    <Input mb='20px' placeholder='Enter Name' type='text' name='name'></Input>
                    <Input mb='20px' placeholder='Enter Email' type='email' name='email' required></Input>
                    <Input mb='20px' placeholder='Enter Password' type='password' name='password' required></Input>
                    <Input mb='20px' placeholder='Photo URL' type='text' name='photo'></Input>
                    <Text fontWeight='medium' color='red.600'>{error}</Text>

                    <Flex justifyContent='center'><Button type='submit' mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>SIGN UP</Button></Flex>
                    
                </form>
            </Box>
            <Text>Already Have an Account? <Link to='/login'><Text as='span' fontWeight='bold' color='rgba(255, 105, 40, 1)'>Log In Here</Text></Link></Text>
            <Text>OR</Text>

            <Flex gap='30px'><Button onClick={handleGoogleSignUp} colorScheme='green'>Sign Up With Google</Button>
            <Button onClick={handleGithubSignUp} colorScheme='blackAlpha'>Sign Up With Github</Button></Flex>
           

        </Flex>
    );
};

export default Register;