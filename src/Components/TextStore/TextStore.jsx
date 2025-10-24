import React from 'react';
import play from '../../../assets/play.svg'
import aStore from '../../../assets/appstore.png'
import { Link } from 'react-router';

const TextStore = () => {
    return (
        <div className='text-center'>
            <h1 className='text-[70px] font-bold'>We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
  Productive
</span> Apps</h1>
            <p className='text-[#627382]'>At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter,
                and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-6 mt-20 mb-10'>
                <div>
                    <Link to="https://play.google.com/store/apps" className='btn w-full flex items-center'><img className='w-[25px] h-[25px]' src={play} alt="" />Google Play</Link>
                </div>
                <div>
                    <Link to="https://www.apple.com/app-store/" className='btn w-full flex items-center'> <img className='w-[25px] h-[25px]' src={aStore} alt="" />App Store</Link>
                </div>
            </div>


        </div>
    );
};

export default TextStore;