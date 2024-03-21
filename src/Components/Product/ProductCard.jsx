import React from 'react'
import { useNavigate } from 'react-router-dom'

import { mobilePhoneProduct } from '../../images/mobilePhoneProduct'
import './ProductCard.css'

const ProductCard = ({ title, description, price, stock, rating, type, productId }) => {

  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${productId}`, {
        state: {
            title, description, price, stock, rating, type
        }
    })
  }

  return (
    <>
        <div className="product-card" onClick={handleProductClick}>
            <div className="product-image">
                <img src={mobilePhoneProduct} alt="" />
            </div>
            <div className="product-details">
                <div className="product-title">{title}</div>
                <div className="product-rating">
                    {rating} 
                    <span>&#9734;</span>
                </div>
                <div className="product-price"><span>&#8377;</span>{price}</div>
                <div className="product-availability">{stock ? <span className='in-stock'>In stock</span>
                : 
                <span className='out-of-stock'>Out of stoack</span>}</div>
            </div>
        </div>
    </>
  )
}

export default ProductCard
