import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
import { Line } from 'recharts';

const Book = ({ singleBook }) => {
    const { author, bookId, bookName, image, category, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook;
    // console.log(singleBook);
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='flex p-6 flex-col rounded-xl border border-[#13131326] bg-base-100'>
                <div className='bg-[#F3F3F3] flex justify-center py-4 rounded-xl mb-6'>
                    <img className='max-w-[300px] max-h-[230px] obejct-cover ' src={image} alt="" />
                </div>
                <div className='flex gap-3 mb-4'>
                    {
                        tags.length ?
                            tags.map((tag, index) => <span key={index} className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 btn'>{tag}</span>) :
                            <span className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 btn'>No tags </span>
                    }
                </div>
                <div className='pb-5 border-b border-[#13131326] border-dashed'>
                    <h2 className='text-2xl font-bold text-[#131313] mb-4'>{bookName}</h2>
                    <p className='text-base font-medium text-gray-700'>By: {author}</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <p>{category}</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <span>{rating} </span>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;