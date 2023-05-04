import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const RecipeCard = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-10-server-site-sakibhasan997.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        // console.log(recipes);
    },[])

    return (
        <div className='my-16'>
            <h2 className='text-center text-3xl font-semibold '>Our <span className='text-yellow-500'>Chefs</span></h2>
            <br />
            <hr />
            <div className=' my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                recipes?.map((recipe) => <ChefCard key={recipe?.id} recipe={recipe}/>)
            }
            </div>
        </div>
    );
};

export default RecipeCard;