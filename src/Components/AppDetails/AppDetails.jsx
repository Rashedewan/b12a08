import React  from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppDetail from './AppDetail';
import Chart from './chart';
import Description from './Description';



const AppDetails = () => {

 

    const {id} = useParams();
    const appsId = parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(dt => dt.id === appsId)
    console.log(singleApp)
    return (
        <div>
            <AppDetail singleApp={singleApp}></AppDetail>
            <div className='border-b border-gray-200 p-3 w-full mb-5'></div>
            <Chart></Chart>
            <div className='border-b border-gray-200 p-3 w-full mb-5'></div>
            <Description></Description>
        </div>
    );
};

export default AppDetails;