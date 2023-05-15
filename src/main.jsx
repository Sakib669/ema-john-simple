import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Layout from './Components/Layout/Layout';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import { cartProductsLoader } from './Loaders/cartProductsLoader';
import Checkout from './Components/Checkout/Checkout';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './Components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/totalProducts')
      },
      {
        path: '/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/manage-inventory',
        element: 
        <PrivateRoute>
            <Inventory></Inventory>
        </PrivateRoute>
      },
      {
        path: '/checkout',
        element: 
        <PrivateRoute>
            <Checkout></Checkout>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
)
