import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { setBookData, getStoredData } from '../../utility/utility';
import InstallCard from './InstallCard';
 

const Installation = () => {
    const [appsList, setAppsList] = useState([])
    const data = useLoaderData();
     

    useEffect(()=> {
        const StoredApp = getStoredData();
        const AppList = data.filter(app=>StoredApp.includes(app.id))
        setAppsList(AppList)
         
    },[])


    const handleUninstall = (id) => {
        setAppsList(prevList => prevList.filter(app => app.id !== id));
        const storedApp = getStoredData();  
        const updatedStored = storedApp.filter(appId => appId !== id);
        localStorage.setItem('ReadLists', JSON.stringify(updatedStored));
         
    };

    return (
        <div className='p-3 '>
            {
                appsList.map(app => <InstallCard key={app.id} onUninstall={handleUninstall} app={app} ></InstallCard>)
            }
        </div>
    );
};

export default Installation;