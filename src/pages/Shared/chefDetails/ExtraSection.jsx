import React from 'react';

const ExtraSection = () => {
    return (
        <div className='my-container my-20'>
            <h2 className='text-3xl'>Our Head Chef</h2>
            <hr className='w-1/4 h-1 bg-yellow-500' />
            <hr className='w-full h-1 bg-yellow-500' />
            <br />
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto'>
                <div className='mx-auto'>
                    <img src="/public//OurChefImg/04_main_home (4).jpg" alt="" />
                    <div className='bg-slate-100 py-5 mx-auto text-center'>
                        <h2 className='text-xl font-semibold'>Monali Rose</h2>
                        <p>Head Chef</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <img src="/public//OurChefImg/04_main_home (5).jpg" alt="" />
                    <div className='bg-yellow-500 text-white py-5 mx-auto text-center'>
                        <h2 className='text-xl font-semibold'>Kazi Fahim</h2>
                        <p>Head Chef</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <img src="/public//OurChefImg/04_main_home (7).jpg" alt="" />
                    <div className='bg-slate-100 py-5 mx-auto text-center'>
                        <h2 className='text-xl font-semibold'>Jerin Jara</h2>
                        <p>Head Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;