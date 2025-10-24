import React from 'react';
import TextStore from '../TextStore/TextStore';
import ImageSection from '../ImageSection/ImageSection';
import ColorBanner from '../ColorBanner/ColorBanner';
import TradingApps from '../TradingApps/TradingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
     
    return (
        <div className='h-full'>
            <TextStore></TextStore>
            <ImageSection></ImageSection>
            <ColorBanner></ColorBanner>
            <TradingApps data={data}></TradingApps>
        </div>
    );
};

export default Home;