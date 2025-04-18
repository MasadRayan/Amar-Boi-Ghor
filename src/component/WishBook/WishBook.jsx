import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";

const WishBook = ({ wishBook }) => {
    const { author, bookId, bookName, image, category, publisher, rating, review, tags, totalPages, yearOfPublishing } = wishBook;
    return (
        <>
            <div className='flex justify-center items-center p-4 border border-[#13131326] rounded-xl gap-7'>
                <div className='bg-[#F3F3F3] flex justify-center py-4 rounded-xl mb-6 max-w-[230px] max-h-[270px] '>
                    <img className='w-10/12' src={image} alt="" />
                </div>
                <div className='w-full'>
                    <div className='border-b border-dashed border-[#13131326] min-w-[100%]'>
                        <h2 className='text-2xl font-bold mb-4'>{bookName}</h2>
                        <p className='mb-4  font-semibold text-[#131313CC]'>By: {author}</p>
                        <div className='flex  gap-3 mb-4'>
                            <p className='font-bold py-2 px-4'>Tag</p>
                            <div className='flex gap-3 mb-4 items-center'>
                                {
                                    tags.length ?
                                        tags.map((tag, index) => <span key={index} className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 '>{tag}</span>) :
                                        <span className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 '>No tags </span>
                                }
                            </div>
                            <div className='flex mb-2 items-center gap-2'>
                                <IoLocationOutline />
                                <p>Year of Publishing: {yearOfPublishing}</p>
                            </div>
                        </div>
                        <span className='flex gap-3 items-center'>
                            <HiMiniUsers />
                            Publisher: {author}
                        </span>
                        <span className='mt-2'>
                            Page: {totalPages}
                        </span>
                    </div >
                    <div className='flex items-center gap-4 mt-3'>
                        <span className='bg-[#328EFF26] text-[#328EFF] rounded-full py-2 px-4 '>Category: {category}</span>
                        <span className='bg-[#FFAC3326] text-[#FFAC33] rounded-full py-2 px-4 '>Rating: {rating}</span>
                        <button className='btn rounded-full text-white bg-[#23BE0A]'>View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishBook;