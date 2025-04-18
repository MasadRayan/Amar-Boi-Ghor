import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import ReadListBook from '../../component/ReadListBook/ReadListBook';
import { getWishedBook } from '../../utilities/addToWishlist';
import WishBook from '../../component/WishBook/WishBook';


const ListedBook = () => {
    const [sort, setSort] = useState('');
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        // console.log(myReadList);
        setReadList(myReadList);
    }, [])
    useEffect(() => {
        const storedWishData = getWishedBook();
        const ConvertedWishList = storedWishData.map(id => parseInt(id));
        const myWishList = data.filter(book => ConvertedWishList.includes(book.bookId));
        setWishList(myWishList);
    }, [])

    const handleSort = (type) => {
        setSort(type);
        if (type === "Pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            const wishPageSort = [...wishList].sort((c, d) => c.totalPages - d.totalPages);
            setWishList(wishPageSort);
        }
        if (type === "Rating") {
            const sortedByRating = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRating);
            const wishRatingSort = [...wishList].sort((c,d) => c.rating - d.rating);
            setWishList(wishRatingSort);
        }
    }


    return (
        <>
            <div className='min-w-full mt-20 bg-[#1313130D] rounded-2xl shadow-xl py-8 mb-3'>
                <p className='text-center text-2xl md:text-4xl font-bold'>Books</p>
            </div>
            <div className='mb-32 text-center'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white">Sort by: {sort && sort}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("Rating")}>Rating</a></li>
                    </ul>
                </details>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read list</Tab>
                        <Tab>Wish List </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='space-y-5'>
                            {
                                readList.map(readBook => <ReadListBook
                                    key={readBook.bookId}
                                    readBook={readBook}
                                ></ReadListBook>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='space-y-5'>
                            {
                                wishList.map(wishBook => <WishBook
                                    key={wishBook.bookId}
                                    wishBook ={wishBook}
                                ></WishBook>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </>
    );
};

export default ListedBook;