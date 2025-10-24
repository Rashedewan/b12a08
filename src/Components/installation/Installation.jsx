import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../utility/utility';
import InstallCard from './InstallCard';


const Installation = () => {
    const [appsList, setAppsList] = useState([])
    const data = useLoaderData();


    useEffect(() => {
        const StoredApp = getStoredData();
        const AppList = data.filter(app => StoredApp.includes(app.id))
        setAppsList(AppList)

    }, [])

    const [sort, setSort] = useState("")
console.log(sort)
    const handleSort = (type) => {
        setSort(type)
        if(type === 'lth'){
           const sortApp = [...appsList].sort((a,b)=> a.downloads - b.downloads);
           setAppsList(sortApp)
        }
        if(type === 'htl'){
           const sortApp = [...appsList].sort((a,b)=> b.downloads - a.downloads);
           setAppsList(sortApp)
        }
    }

    const handleUninstall = (id) => {
        setAppsList(prevList => prevList.filter(app => app.id !== id));
        const storedApp = getStoredData();
        const updatedStored = storedApp.filter(appId => appId !== id);
        localStorage.setItem('ReadLists', JSON.stringify(updatedStored));

    };

    return (
        <div className='p-3 '>
            <div className='flex justify-end'>
            <details className="dropdown">
                <summary className="btn btn-secondary m-1">Sort By</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("htl")}>High-Low</a></li>
                    <li><a onClick={()=>handleSort("lth")}>Low-High</a></li>
                </ul>
            </details>
            </div>

            {
                appsList.map(app => <InstallCard key={app.id} onUninstall={handleUninstall} app={app} ></InstallCard>)
            }
        </div>
    );
};

export default Installation;