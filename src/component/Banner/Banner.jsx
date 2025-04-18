import React from 'react';

import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="mt-12 mb-24 hero bg-[#1313130D] rounded-2xl md:min-h-[554px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=''>
                        <img
                            src={bookImage}
                            className=" lg:h-max rounded-lg shadow-2xl "
                        />
                    </div>
                    <div className='text-center md:text-left'>
                        <h1 className=" mb-10 lg:text-5xl text-3xl font-bold ">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;