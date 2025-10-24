import React from 'react';
import img from '../../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div >

            <div className='mx-auto text-center ml-125 mt-20'>
                <img src={img} alt="" />
            </div>
            <h1 className='text-3xl text-black text-center font-bold mt-10 mr-13'>Oops - PAGE NOT FOUND</h1>
            <p className='text-3xl text-black text-center font-bold mt-10 mr-13'>The page you are looking for is not Available</p>
        </div>

    );
};

export default ErrorPage;