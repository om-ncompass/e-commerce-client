import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import flipkartLogo from '../../images/flipkartLogo.png'
import searchButton from '../../svgs/searchButton.svg'
import { userLogo } from '../../svgs/userLogo'
import { orderLogo } from '../../svgs/orderLogo'
import { downArrow } from '../../svgs/downArrow'
import { logoutLogo } from '../../svgs/logoutLogo'

import './Navbar.css'

const Navbar = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

  return (
    <>
        <nav className='navbar'>

            <div className="navbar-left-part">
                <NavLink to="/" className="nav-logo"><img src={flipkartLogo} alt="logo" /></NavLink>
                <div className="search-products-container">
                    <form className="search-products-form">
                        <button className='search-button'>
                            <img src={searchButton} alt="search" />
                        </button>
                        <input type="text" name="searchText" placeholder='Search for Products, Brands and More' className='search-input' />
                    </form>
                </div>
            </div>

            <div className="navbar-right-part">
                {
                    token ? 
                        <>
                        <div className="explore-products-part">
                            <NavLink className="explore-product" to="/products">
                                    {/* <img src={userLogo} alt="user" className='my-account-img'/> */}
                                    <span>Explore Products</span>
                                    {/* <img src={downArrow} alt="da" className='my-account-arrow' /> */}
                            </NavLink>
                        </div>
                        <div className="my-account-part">
                            <NavLink className="my-account">
                                <img src={userLogo} alt="user" className='my-account-img'/>
                                <span>Account</span>
                                <img src={downArrow} alt="da" className='my-account-arrow' />
                            </NavLink>
                            <ul className="my-account-dropdown">
                                <NavLink>
                                    <li>
                                        <img src={userLogo} alt="user" />
                                        <span>My Profile</span>
                                    </li>
                                </NavLink>
                                <NavLink to="/order">
                                    <li>
                                        <img src={orderLogo} alt="order" />
                                        <span>My Orders</span>
                                    </li>
                                </NavLink>
                                <NavLink onClick={logoutHandler}>
                                    <li>
                                        <img src={logoutLogo} alt="order" />
                                        <span>Logout</span>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                        </>
                    :
                        <>
                        <div className="explore-products-part">
                            <NavLink className="explore-product" to="/products">
                                    {/* <img src={userLogo} alt="user" className='my-account-img'/> */}
                                    <span>Explore Products</span>
                                    {/* <img src={downArrow} alt="da" className='my-account-arrow' /> */}
                            </NavLink>
                        </div>
                        <div className="login-signup-part">
                            <NavLink className="login-part" to="login">
                                <img src={userLogo} alt="user" className='login-part-img'/>
                                <span>Login</span>
                                <img src={downArrow} alt="da" className='login-part-arrow' />
                            </NavLink>
                            <ul className="login-dropdown">
                                <NavLink className='signup-button-container' to="signup">
                                    <p>New customer?</p>
                                    <span>Sign Up</span>
                                </NavLink>
                                <NavLink to="">
                                    <li>
                                        <img src={userLogo} alt="user" />
                                        <span>My Profile</span>
                                    </li>
                                </NavLink>
                                <NavLink to="">
                                    <li>
                                        <img src={orderLogo} alt="order" />
                                        <span>My Orders</span>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                        </>
                      
                }
            </div>

        </nav>
    </>
  )
}

export default Navbar
