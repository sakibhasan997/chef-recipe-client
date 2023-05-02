import React from 'react';
import ChefSkills from '../../Shared/chefSkills/ChefSkills';
import RecipeCard from '../../chefCard/RecipeCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    

    return (
        <div className='my-container'>
            <ChefSkills/>
            <RecipeCard/>
        </div>
    );
};

export default Home;