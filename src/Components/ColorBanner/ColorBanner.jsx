import React from 'react';

const ColorBanner = () => {
    return (
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 text-white">
            <h1 className='text-center text-3xl font-bold mt-3'>Trusted by Millions, Built for You</h1>

            <div className='flex justify-center items-center gap-15 p-7'>
                <div className='text-center space-y-3'>
                    <p><small>Top Downloads</small></p>
                    <h2 className='text-4xl font-bold'>29.6M</h2>
                    <p><small>21% more than last month</small></p>


                </div>
                <div className='text-center space-y-3' >
                    <p><small>Top Reviews</small></p>
                    <h2 className='text-4xl font-bold'>906K</h2>
                    <p><small>46% more than last month</small></p>

                </div>
                <div className='text-center space-y-3' >
                    <p><small>Active Apps</small></p>
                    <h2 className='text-4xl font-bold'>132+</h2>
                    <p><small>31 more will Launch</small></p>
                </div>
            </div>

        </div>
    );
};

export default ColorBanner;