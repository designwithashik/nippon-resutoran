import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Button } from '@chakra-ui/react';

const Login = () => {
    const { googleLogIn, logOut } = useContext(AuthContext);
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => console.log(result.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <h2>Login Here</h2>
            <Button onClick={handleGoogleLogIn}>Google Log In</Button>
            <Button onClick={logOut}>Log Out</Button>
        </div>
    );
};

export default Login;