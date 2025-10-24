import React from 'react';
import dload from '../../../assets/icon-downloads.png'
import review from '../../../assets/icon-ratings.png'
import { Link } from 'react-router-dom';

const TradeApp = ({ dt }) => {

    return (
        <Link to={`/appdetails/${dt.id}`}>
            <div className='p-3 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <div>
                    <img src={dt.image} alt="" />
                </div>
                <h1 className='font-semibold mt-3 text-center'>{dt.title}</h1>
                <div className='flex justify-between mt-3'>
                    <h3 className='w-[85px] h-[31px] bg-[#F1F5E8] p-3  flex items-center gap-1'> <img className='w-[16px] h-[16px]' src={dload} /> {dt.downloads}M</h3>
                    <h3 className='w-[60px] h-[31px] bg-[#FFF0E1] p-3 flex items-center gap-1'><img className='w-[16px] h-[16px]' src={review} />{dt.ratingAvg}</h3>
                </div>
            </div>
        </Link>

    );
};

export default TradeApp;