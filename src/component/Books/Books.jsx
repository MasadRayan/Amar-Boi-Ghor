import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
            })
    }, [])

    return (
        <>
            <div className='mb-20'>
                <div className='md:mb-9 mb-5'>
                    <h3 className='text-3xl text-center font-bold'>Books</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allBooks.map(singleBook => <Book
                            key={singleBook.bookId}
                            singleBook={singleBook}
                        ></Book>)
                    }
                </div>
            </div>
        </>
    );
};

export default Books;