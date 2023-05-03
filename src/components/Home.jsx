import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const chefs = useContext(AuthContext);
    console.log(chefs)
    return (
        <div>
            <h2>Alhamdulillah</h2>
            <Link to={`chef/1003`}>Chef Recipes</Link>
        </div>
    );
};

export default Home;