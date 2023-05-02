import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (
        <div>
            
        </div>
    );
};

export default ChefRecipes;