import React from 'react';
import dload from '../../../assets/icon-downloads.png'
import review from '../../../assets/icon-ratings.png'
import { Link } from 'react-router-dom';

const AppCard = ({ data }) => {
    return (
        <Link to={`/appdetails/${data.id}`}>
            <div className='py-3 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <div>
                    <img className='mx-auto rounded-sm' src={data.image} alt="" />
                </div>
                <h1 className='font-semibold mt-3 text-center'>{data.title}</h1>
                <div className='flex justify-between mt-3 p-2'>
                    <h3 className='w-[75px] h-[31px] bg-[#F1F5E8] p-3  flex items-center gap-1'> <img className='w-[16px] h-[16px]' src={dload} /> {data.downloads}M</h3>
                    <h3 className='w-[40px] h-[31px] bg-[#FFF0E1] p-1 flex items-center gap-1'><img className='w-[16px] h-[16px]' src={review} />5</h3>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;