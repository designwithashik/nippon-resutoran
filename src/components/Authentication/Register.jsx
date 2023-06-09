import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Box, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const { setUser, emailSignUp, error, setError } = useContext(AuthContext);
   
    const handleEmailSignUp = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
   
        setName(form.name.value)
        const email = form.email.value;
        const password = form.password.value;
    
        setImage(form.photo.value)
        console.log(email, password)
        if(!email){
            setError('email field cannot be empty')
            return
        }
        if(!password){
            setError('password field cannot be empty')
            return
        }
        if (password.length < 6) {
            setError('password length must be least 6 characters')
            return
        }
        emailSignUp(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: `${name}`,
                    photoURL: `${image}`
                });
                console.log(result.user)
                setUser(result.user)
            }
        )
            .catch(error => setError('something went wrong, please try again!'))
            
        form.reset()
       
    }
    
    return (
        <Flex my={{base: '120px', md: '0px'}} mx={{base: '20px', md: '0px'}} flexDirection='column' gap='10px'  h={{md:'calc(100vh - 252.8px)'}} alignItems='center' justifyContent='center'>
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

            
           

        </Flex>
    );
};

export default Register;