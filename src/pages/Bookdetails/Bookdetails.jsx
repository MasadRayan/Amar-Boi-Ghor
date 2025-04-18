import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../utilities/addToDB';

const Bookdetails = () => {

    const allData = useLoaderData();
    const { id } = useParams();
    const bookid = parseInt(id);
    const singleData = allData.find(book => book.bookId === bookid);
    console.log(singleData);
    const { author, bookId, bookName, image, category, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleData;


    const hanfleMarkAsRead = id => {
        addToDB(id);
    }


    return (
        <>
            <div className='md:flex justify-center items-center mt-5 md:max-h-[711px] gap-5'>
                <div className='w-[50%] bg-[#F3F3F3] flex justify-center py-4 rounded-xl mb-6
                min-w-screen md:min-w-0 md:max-w-[400px] md:max-h-[700px] '>
                    <img className='md:w-8/12 md:min-h-10/12 obejct-cover ' src={image} alt="" />
                </div>
                <div className='flex flex-col md:w-[50%] md:ml-5 p-5'>
                    <h2 className=' text-2xl md:text-4xl font-bold text-[#131313] mb-4  '>{bookName}</h2>
                    <p className=' mb-2 text-base pb-2 border-b border-[#13131326] font-medium text-gray-700'>By: {author}</p>
                    <p className='border-b border-[#13131326] text-lg text-[#131313CC] font-semibold pb-2 mb-3'>{category}</p>

                    <p className='text-sm  text-[#131313B3]'><span className='font-bold'>Review:</span>{review}</p>

                    <span className='font-bold mt-4 mb-2'> Tags:</span>
                    <div className='flex items-center gap-5 pb-2 border-b border-[#13131326] mb-3'>
                        {

                            tags.length ?
                                tags.map((tag, index) => <span key={index} className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 '>#{tag}</span>) :
                                <span className='bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl py-2 px-4 btn'>No tags </span>
                        }

                    </div>
                    <p className='font-bold mt-4 mb-2'>
                        <span className='text-[#131313B3] font-normal'>
                            Number of Pages:
                        </span>
                        {totalPages}
                    </p>
                    <p className='font-bold mb-2'><span className='text-[#131313B3]'> Publisher: </span>{author}</p>
                    <p className='font-bold mb-2'><span className='text-[#131313B3]'>Year of Publishing: </span> {yearOfPublishing}</p>
                    <p className='font-bold mb-4'><span className='text-[#131313B3]'> Rating:</span> {rating}</p>
                    <div className='flex items-center gap-4'>
                        <button onClick={() => hanfleMarkAsRead(id)} className="btn">Mark as Read</button>
                        <button className="btn btn-accent">Add to Wishlist</button>
                        <Link to={'/'}>
                        <button className="btn btn-soft btn-info">Back</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookdetails; <h2>hi book details</h2>