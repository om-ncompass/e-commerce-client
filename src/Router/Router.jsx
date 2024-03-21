import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Components/Auth/Login'
import Register from '../Components/Auth/Register'
import Home from '../Components/Home/Home'
import ProductList from '../Components/Product/ProductList'
import SingleProduct from '../Components/Product/SingleProduct'
import OrderList from '../Components/Order/OrderList'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:productId' element={<SingleProduct />} />
        <Route path='/order' element={<OrderList />} />
    </Routes>
  )
}

export default Router
