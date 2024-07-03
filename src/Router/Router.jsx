import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Root/Home';

const Router = createBrowserRouter([
   {
    path : '/',
    element : <Root />,
    errorElement : "Pls Back Home page , This Sections is Error ",
    children : [
        {
            path : "/",
            element : <Home />
        }
    ]
   }
]) 

export default Router;