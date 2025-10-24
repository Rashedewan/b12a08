import React from 'react';
import download from '../../../assets/icon-downloads.png'
import review from '../../../assets/icon-review.png'
import ratings from '../../../assets/icon-ratings.png'
import { setBookData } from '../../utility/utility';
import Chart from './chart';

const AppDetail = ({ singleApp }) => {

    const handleAppsArr = (id) => {
        setBookData(id)
    }
    return (
        <div className='flex p-4 '>
            <div>
                <img className='p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] ' src={singleApp.image} alt="" />
            </div>
            <div className='ml-5'>
                 <div>
                    <h1 className='text-4xl font-bold text-[#001931]'>{singleApp.title}</h1>
                    <p className='text-[#627382] text-sm mt-1'>Developed By <span className='text-[#3333d9]'>{singleApp.companyName}</span></p>
                 </div>
        <div className='border-b border-gray-200 p-3 w-full mb-5'></div>
                <div className='flex justify-center items-center gap-10' >
                    <div>
                        <img className='w-[40px] h-[38px] ml-3 mb-3' src={download} alt="" />
                        <p>Download</p>
                        <h1 className='text-2xl font-bold mt-3'>{singleApp.downloads}M</h1>
                    </div>
                    <div>
                        <img className='w-[40px] h-[38px] ml-9 mb-3' src={ratings} alt="" />
                        <p>Average Ratings</p>
                        <h1 className='text-2xl font-bold ml-9 mt-3'>{singleApp.ratingAvg}</h1>
                    </div>

                     <div>
                        <img className='w-[40px] h-[38px] ml-6 mb-3' src={review} alt="" />
                        <p>Total Reviews</p>
                        <h1 className='text-2xl font-bold ml-4 mt-3'>{singleApp.reviews}</h1>
                    </div>

                </div>
                <button onClick={()=>handleAppsArr(singleApp.id)} className='btn btn-primary mt-5'>Install Now ( {singleApp.size} MB )</button>
            </div>
             
 
        </div>
        
        
    );
};

export default AppDetail;