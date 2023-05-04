import React from 'react';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ recipe }) => {
    const { id, name, picture, category, yearsOfExperience, bio, numberOfRecipes, likes, description, numberOfRecipesId, rating } = recipe;
    return (
        <div className='w-full '>
            <div>
                <div className="card w-full bg-base-100 shadow-xl">
                    
                        <LazyLoad>
                            <figure><img className='h-64 w-full object-cover' src={picture} alt="Shoes" /> </figure>
                        </LazyLoad>
                   
                    <div className="card-body">
                        <h2 className="card-title text-xl font-semibold">Name: {name}</h2>
                        <hr />
                        <p>Years Of Experience: {yearsOfExperience}</p>
                        <p> Recipes: {numberOfRecipes}</p>
                        <p className='flex items-center gap-2'> <FaThumbsUp className='text-primary' /> {likes}</p>
                        <div className="card-actions justify-between items-center">
                            <div>
                                <Rating
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-warning' />}
                                    fullSymbol={<FaStar className='text-warning' />}
                                />
                                <span>{rating}</span>
                            </div>
                            <Link to={`/recipes/${id}`}><button className="btn btn-outline btn-warning text-white">View Recipes</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;