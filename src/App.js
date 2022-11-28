import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Main/Main';
import Errorhandle from './Component/Errorhandle/Eroorhandle';
import Home from './Component/Home/Home';
import EachCategory from './Component/EachCategory/EachCategory';
import Login from './Component/Login/Login';
import Registration from './Component/Login/Registration';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardLayout from './Component/DashboardLayout/DashboardLayout';
import MyOrder from './Component/MyOrder/MyOrder';
import AllBuyers from './Component/Admin/AllBuyers';
import AllSeller from './Component/Admin/Seller/AllSeller';
import Sellers from './Component/Sellers/Sellers';
import MyProducts from './Component/Sellers/MyProducts';
import Blog from './Component/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '*',
          element: <Errorhandle></Errorhandle>
        },
        {
          path: '/',
          loader: () => fetch('https://assignment-12-pi.vercel.app/categories'),
          element: <Home></Home>
        },
        {
          path: '/category/:Id',
          loader: async ({ params }) => {
            return fetch(`https://assignment-12-pi.vercel.app/category/${params.Id}`)
          },
          element: <PrivateRoute><EachCategory></EachCategory></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
      children: [
        {
          path: '/dashboard/my-order',
          element: <MyOrder></MyOrder>
        },
        {
          path: '/dashboard/all-buyers',
          element: <AllBuyers></AllBuyers>
        },
        {
          path: '/dashboard/all-sellers',
          element: <AllSeller></AllSeller>
        },
        {
          path: '/dashboard/add-product',
          element: <Sellers></Sellers>
        },
        {
          path: '/dashboard/my-products',
          element: <MyProducts></MyProducts>
        },
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
