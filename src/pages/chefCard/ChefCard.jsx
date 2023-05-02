import React from 'react';

const ChefCard = ({ recipe }) => {
    const { id, name, picture, category, yearsOfExperience, bio, numberOfRecipes, likes, description, numberOfRecipesId, rating } = recipe;
    return (
        <div className='w-full '>
            <div>
                <div className="card w-full bg-base-100 shadow-xl">
                <figure> <img className='h-64 w-full object-cover' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Years Of Experience: {yearsOfExperience}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;