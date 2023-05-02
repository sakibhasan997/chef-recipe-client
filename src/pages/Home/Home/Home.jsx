import React from 'react';
import ChefSkills from '../../Shared/chefSkills/ChefSkills';
import RecipeCard from '../../chefCard/RecipeCard';
import { useLoaderData } from 'react-router-dom';
import ExtraSection from '../../Shared/chefDetails/ExtraSection';

const Home = () => {

    

    return (
        <div className='my-container'>
            <ChefSkills/>
            <RecipeCard/>
            <ExtraSection/>
        </div>
    );
};

export default Home;