import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

import './Auth.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (email) => {
        setEmail(email);
      };
    
    const onChangePassword = (password) => {
        setPassword(password);
    };

    const loginUser = async (event) => {
        event.preventDefault();
        try {    
            const loginResponse = await axios.post(
                "http://localhost:3000/auth/login",
                { email, password },
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": true,
                  },
                }
              );

              const token = loginResponse.data.data.data;
        
    
              if(token) {
                localStorage.setItem("token", token);
                alert("Logged in succesfully.")
                navigate("/")
              }          
    
        } catch (error) {
            if(error instanceof Error) {
                alert("Login unsuccesfull.")
            }
        }
      };

    return (
        <>
            <div className="login-container">
                <div className="login-left-part">
                    <span>Login</span>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="login-right-part">
                    <form className='form' onSubmit={loginUser}>
                        <div className="form-input-container">
                            <input type="email" placeholder='Enter email' onChange={(event) => onChangeEmail(event.target.value)}/>
                            <input type="password" placeholder='Enter password' onChange={(event) => onChangePassword(event.target.value)}/>
                        </div>
                        <div className="form-tandc-container">
                            <p>By continuing your agree to Shopenza's </p>
                            <a href="" className="terms-of-use">Terms of Use</a>
                            <p>and</p>
                            <a href="" className="privacy-policy">Privacy Policy.</a>
                        </div>
                        <div className="submit-button-container">
                            <button className='submit-button' type="submit">Login</button>
                        </div>
                        <div className="form-signup-container">
                            <NavLink to="/signup" className="form-signup-link">New to Shopenza? Create an account</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
