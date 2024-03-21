import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { mobilePhone } from '../../images/mobilePhone'
import './Home.css'
import ProductList from '../Product/ProductList';

const camelCaseToNormal = (str) => {
  return str
    // insert a space before all caps
    .replace('_', ' ')
    // convert first letter of each word to capital
    .replace(/\b\w/g, x => x.toUpperCase())
}

const Home = () => {

  const [productTypes, setProductTypes] = useState([]);
  const [productList, setProductList] = useState([]);

  const fetchProductTypes = async () => {
    const productTypes = await axios.get(
      "http://54.153.234.233:3002/product/types",
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      }
    );

    setProductTypes(await productTypes.data.data.data)
  }

  useEffect(() => {
    fetchProductTypes();
  }, [])

  return (
    <>
      <div className="category-container">
        {
          productTypes.map((productType) => {
            return (
              <NavLink >
                <div className="specific-product-category">
                  <img src={mobilePhone} alt="" />
                  <span>{camelCaseToNormal(productType.type)}</span>
                </div>
              </NavLink>
            );
          })
        }
      </div>
      <ProductList />
    </>
  )
}

export default Home
