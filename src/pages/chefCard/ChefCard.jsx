import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const ChefCard = ({ recipe }) => {
    const { id, name, picture, category, yearsOfExperience, bio, numberOfRecipes, likes, description, numberOfRecipesId, rating } = recipe;
    return (
        <div className='w-full '>
            <div>
                <div className="card w-full bg-base-100 shadow-xl">
                <figure> <img className='h-64 w-full object-cover' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Name: {name}</h2>
                        <hr />
                        <p>Years Of Experience: {yearsOfExperience}</p>
                        <p> Recipes: {numberOfRecipes}</p>
                        <p className='flex gap-2'> <FaThumbsUp/> {likes}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning text-white">View Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;