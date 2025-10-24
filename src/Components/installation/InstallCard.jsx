import React from 'react';
import download from '../../../assets/icon-downloads.png'
import rating from '../../../assets/icon-ratings.png'

const InstallCard = ({ app, onUninstall }) => {
    return (

        <div className='flex justify-between items-center p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_-4px_6px_-1px_rgba(0,0,0,0.1)] m-3'>
            <div className='flex items-center'>
                <img className='w-[80px] h-[80px]' src={app.image} alt="" />
                <div className='ml-3'>
                    <h1 className='text-xl'>{app.title}</h1>
                    <div className='flex items-center mt-3'>
                        <p className='flex items-center gap-2 mr-2'>
                            <img className='w-[10px] h-[10px]' src={download} alt="" />{app.downloads}M
                        </p>
                        <p className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={rating} alt="" />{app.ratingAvg}
                        </p>
                        <p className='ml-3'>{app.size}MB</p>
                    </div>
                </div>
            </div>

            <button onClick={()=>onUninstall(app.id)} className='btn btn-primary'>Uninstall</button>
        </div>

    );
};

export default InstallCard;