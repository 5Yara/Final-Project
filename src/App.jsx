import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './Component/Cart/Cart.jsx'
import Layout from './Component/Layout/Layout.jsx'
import Categories from './Component/Categories/Categories.jsx'
import Brands from './Component/Brands/Brands.jsx'
import Products from './Component/Products/Products.jsx'
import Register from './Component/Register/Register.jsx'
import Login from './Component/Login/Login.jsx'
import Home from './Component/Home/Home.jsx'
import NotFound from './Component/NotFound/NotFound.jsx'
import WishList from './Component/WishList/WishList.jsx'
import ShippingAddress from './Component/ShippingAddress/ShippingAddress.jsx'
import CounterContextProvider from './Component/Context/CounterContex.js'
import { UserContext } from './Component/Context/UserContext.js'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.js'
import AllOrders from './Component/AllOrders/AllOrders.jsx'
import WishListContextProvider from './Component/Context/WishListContext.js'
import { createHashRouter } from 'react-router-dom/dist/index.js'


export default function App() {

    let routers = createHashRouter([
        {
            path: '', element: <Layout />, children: [
                { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
                { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
                { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
                { path: 'wishList', element: <ProtectedRoute><WishList /></ProtectedRoute> },
                { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
                { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
                { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
                { path: 'shippingaddress/:cartId', element: <ProtectedRoute><ShippingAddress /></ProtectedRoute> },
                { path: 'allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
                { path: 'register', element: <Register /> },
                { path: 'login', element: <Login /> },
                { path: '*', element: <NotFound /> },
            ]
        }
    ])

    let { setUserToken } = useContext(UserContext);
    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            setUserToken(localStorage.getItem('userToken'))
        }
    }, [])

    return <>
        <CounterContextProvider>
            <WishListContextProvider>
                <Provider store={Store}>
                    <RouterProvider router={routers}></RouterProvider>
                    <Toaster />
                </Provider>
            </WishListContextProvider>
        </CounterContextProvider>
    </>
}
