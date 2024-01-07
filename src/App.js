import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Body from './components/main_body/home';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import Shop from './components/shop/shop';
import Contactus from './components/contactus/contactus';
import Aboutus from './components/aboutus/aboutus';
import Cart from './components/cart/cart';
import Functions from './function/functions';


let route = createBrowserRouter([

  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Body />
      },

      {
        path: "/Login",
        element: <Login />
      },

      {
        path: "/Furnitrueone",
        element: <Body />
      },


      {
        path: "/shop",
        element: <Shop />
      },

      {
        path: "/contactus",
        element: <Contactus />
      },

      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/aboutus",
        element: <Aboutus />
      },
      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/functions",
        element: <Functions />
      },
    ]


  },
])


function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App;
