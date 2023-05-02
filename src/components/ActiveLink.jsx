import { Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink to={to}>
            {({isActive})=>isActive ? <Text fontWeight='bold' color='rgba(31, 31, 31, 1)'>{children}</Text> : <Text fontWeight='bold' color='white'>{children}</Text>}
        </NavLink>
    );
};

export default ActiveLink;