import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import FavouriteItems from './FavouriteItems.jsx';
import CheckoutPage from './CheckoutPage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },

      {
        path: "/favourite",
        element: <FavouriteItems />
      },

      {
        path: "/cart",
        element: <Cart />,
        children: [
          {
            path : "/cart/checkout",
            element: <CheckoutPage />
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
