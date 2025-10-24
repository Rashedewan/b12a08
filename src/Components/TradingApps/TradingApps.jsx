import React from 'react';
import TradeApp from '../TradeApp/TradeApp';
import { Link } from 'react-router';

const TradingApps = ({ data }) => {

    return (
        <div className="w-[1200px] mx-auto p-8 text-center mt-5 ">
            <h1 className='font-extrabold text-[48px]'>Trending Apps</h1>
            <p className='text-[#627382] mb-5'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-4 gap-6 p-5'>
                {
                    data.map(dt => <TradeApp key={dt.id} dt={dt}></TradeApp>)
                }
            </div>



            <Link to="/apps" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold px-6 py-2 rounded mt-5">
                Show All
            </Link>



        </div>
    );
};

export default TradingApps;