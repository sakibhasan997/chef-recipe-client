import React, { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaSearch, FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [disable, setDisable] = useState(false);
    const handleFavorite = () => {
        toast('Item Added Successfully')
        setDisable(true)
    }


    const details = useLoaderData();
    const { id, name, picture, category, yearsOfExperience, bio, numberOfRecipes, likes, description, numberOfRecipesId, rating } = details;
    return (
        <div className='my-container  my-16 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='col-span-2'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-semibold">Name: {name}</h2>
                        <hr />
                        <p className='text-lg font-medium'>Short Bio: {bio}</p>
                        <p> <span className='text-lg font-medium '>Description:</span> {description}</p>
                        <hr />
                        <p className='flex gap-2'> <FaThumbsUp className='text-primary' /> {likes}</p>
                        <p>Number: {numberOfRecipes}</p>
                        <p>Experience: {yearsOfExperience}</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleFavorite} disabled={disable} className="btn btn-warning">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1'>
                <div >
                    <input className='border-2 py-2 px-4 rounded border-yellow-500 absolute' type="text" name="text" id="" placeholder='Search Your Recipes..' /> <FaSearch className='relative  top-4  right-[-190px] text-yellow-500 overflow-hidden' />
                </div>
                <br />
                <div>
                    <h2 className='text-2xl font-bold mt-10 mb-5'>Recipes Categories</h2>
                    <hr className=' w-full h-1 bg-yellow-500' />
                    <br />
                    <p className='flex gap-4 items-center font-medium text-lg pb-3'><FaArrowAltCircleRight className='text-yellow-500' /> <>Beverages</> </p>
                    <hr />
                    <p className='flex gap-4 items-center font-medium text-lg py-3'><FaArrowAltCircleRight className='text-yellow-500' /> <>Ice Cream</> </p>
                    <hr />
                    <p className='flex gap-4 items-center font-medium text-lg py-3'><FaArrowAltCircleRight className='text-yellow-500' /> <>Appetizers</> </p>
                    <hr />
                    <p className='flex gap-4 items-center font-medium text-lg py-3'><FaArrowAltCircleRight className='text-yellow-500' /> <>Pudding</> </p>
                    <hr />
                    <p className='flex gap-4 items-center font-medium text-lg py-3'><FaArrowAltCircleRight className='text-yellow-500' /> <>Foods</> </p>

                </div>
                <div>
                    <h2 className='text-2xl font-bold mt-10 mb-5'>Latest News</h2>
                    <hr className=' w-full h-1 bg-yellow-500' />
                    <div className='flex items-center gap-4 my-5'>
                        <div>
                            <img className='w-32' src="/public/latesImg/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Recipe Title Here</h2>
                            <p>heap into electronic type setting</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center gap-4 my-5'>
                        <div>
                            <img className='w-32' src="/public/latesImg/easy-dinner-recipes-pizza-casserole-1676054902.jpeg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Recipe Title Here</h2>
                            <p>heap into electronic type setting</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 my-5'>
                        <div>
                            <img className='w-32' src="/public/site-img/DetailsBanner.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Recipe Title Here</h2>
                            <p>heap into electronic type setting</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center gap-4 my-5'>
                        <div>
                            <img className='w-32' src="/public/latesImg/fruit-custard-recipe.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Recipe Title Here</h2>
                            <p>heap into electronic type setting</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center gap-4 my-5'>
                        <div>
                            <img className='w-32' src="/public/latesImg/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.jpeg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Recipe Title Here</h2>
                            <p>heap into electronic type setting</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="/public/latesImg/06_recipe_details (2).jpg" alt="" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;