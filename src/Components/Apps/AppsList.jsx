import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppCard from './AppCard';

const AppsList = () => {
    const AppsData = useLoaderData();

    return (
        <div className='w-[1300px] mx-auto p-8 text-center'>
            <h1 className='text-3xl font-bold text-black my-7 '>Our All Applications</h1>
            <p className='text-[#627382] mb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between mt-5 mb-10'>
                <div>
                    <h1 className='text-2xl font-bold'>({AppsData.length} Apps Found)</h1>
                </div>
                <div className=''>
                    <input className="w-full px-4 bg-white text-gray-700 border-2 border-blue-500"
                        type="text" name="app" placeholder="Search Apps" />
                </div>
            </div>

            


                <div className='grid md:grid-cols-4 gap-4 p-2'>

                    {
                        AppsData.map(data => <AppCard key={data.id} data={data}></AppCard>)
                    }


                </div>
           


        </div>
    );
};

export default AppsList;