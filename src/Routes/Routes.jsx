import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Bookdetails from '../pages/Bookdetails/Bookdetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
          path: '/about',
          Component: About,
        },
        {
          path: '/bookDetails/:id',
          loader: () => fetch('booksData.json'),
          Component: Bookdetails
        }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }

])