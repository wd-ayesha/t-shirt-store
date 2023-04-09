import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';
import Contact from './components/Contact/Contact';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: 'order-review',
      element: <OrderReview></OrderReview>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    }
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
