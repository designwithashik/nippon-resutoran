import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    if(loading) {
       return <h2>Wait a bit..</h2>
    }
    if (user) {
        return <>{children}</>
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;