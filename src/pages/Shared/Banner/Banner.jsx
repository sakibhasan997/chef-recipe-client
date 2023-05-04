import React from 'react';

import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <div className='  '>
            <div className='my-container  grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center mx-auto md:mx-0 pt-6 md:pt-0  text-white'>
                    <h2 className='font-semibold text-2xl lg:text-5xl '>Being <span className='text-yellow-500'>Smart</span> Chef <span className='text-yellow-500'>Every</span> Day</h2>
                    <p className='py-4 tracking-widest text-base md:text-xl'>RECIPES EVERY WEEK UPDATES</p>
                    <button className="btn btn-outline btn-warning w-32">Read More</button>
                </div>
                <div className='mx-auto'>
                    <LazyLoad fallback='loading...'>
                        <img className=' h-[290px]  md:h-[625px] mt-[100px]' src="/assets/site-img/Banner-2.png" alt="" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default Banner;