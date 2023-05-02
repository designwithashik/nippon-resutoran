import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const chefs = useContext(AuthContext);
    console.log(chefs)
    return (
        <div>
            <h2>Alhamdulillah</h2>
        </div>
    );
};

export default Home;