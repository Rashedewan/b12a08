import React from 'react';
import Img from '../../../assets/hero.png'

const ImageSection = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={Img} alt="" />
        </div>
    );
};

export default ImageSection;