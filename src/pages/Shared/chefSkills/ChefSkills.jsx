import React from 'react';

const ChefSkills = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div>
                    <img src="/assets/site-img/banner-img.png" alt="" />
                </div>
                <div className='my-auto'>
                    <h2 className='text-2xl font-semibold text-yellow-500'>Technical Skills:</h2>
                    <br />
                    <li>Strong knowledge of cooking techniques and methods</li>
                    <li>Ability to create and execute recipes with precision</li>
                    <li>Knowledge of ingredients and their uses in different dishes</li>
                    <li>Ability to operate and maintain kitchen equipment and appliances</li>
                    <li>Knowledge of food safety and hygiene practices</li>
                    <br />
                    <br />
                    <h2 className='text-2xl font-semibold text-yellow-500'>Creativity:</h2>
                    <br />
                    <li>Ability to develop unique and innovative recipes and menu items</li>
                    <li>Willingness to experiment with different ingredients and flavor combinations</li>
                    <li>Ability to adapt recipes and menus to suit changing customer preferences and dietary</li>
                    <li>Eye for presentation and aesthetics, with the ability to create visually appealing dishes</li>
                    <br />
                    <br />
                    <button className='btn btn-warning text-white'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ChefSkills;