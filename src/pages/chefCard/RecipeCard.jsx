import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const RecipeCard = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        // console.log(recipes);
    },[])

    return (
        <div className=''>
            <div className=' my-container grid grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
            {
                recipes?.map((recipe) => <ChefCard key={recipe?.id} recipe={recipe}/>)
            }
            </div>
        </div>
    );
};

export default RecipeCard;