import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import './SingleProduct.css'
import { mobilePhoneProduct } from '../../images/mobilePhoneProduct'

const SingleProduct = () => {

  const { productId } = useParams();
  const location = useLocation();
  const state = location.state;

  return (
    <>
        <div className="single-product-container">
            <div className="left-part">
                <img src={mobilePhoneProduct} alt="product_image" />
                <div className="below-button-container">
                    <button className='add-to-cart-button'>ADD TO CART</button>
                    <button className='buy-now-button'>BUY NOW</button>
                </div>
            </div>
            <div className="right-part">
                <div className="product-title">{state.title}</div>
                <div className="product-rating">{state.rating}&#9734;</div>
                <div className="product-price">&#8377;{state.price}</div>
                <div className="product-description">{state.description}</div>
            </div>
        </div>
    </>
  )
}

export default SingleProduct
