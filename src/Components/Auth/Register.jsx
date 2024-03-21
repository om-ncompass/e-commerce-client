import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

import './Auth.css'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();
  
    const onChangeEmail = (email) => {
      setEmail(email);
    };
  
    const onChangePassword = (password) => {
        setPassword(password);
    };
  
    const onChangeFirstName = (firstName) => {
      setFirstName(firstName);
    }

    const onChangeLastName = (lastName) => {
        setLastName(lastName);
    }
  
    const signUp = async (event) => {
      event.preventDefault();
      try {
  
          const signUpResponse = await axios.post(
            "http://54.153.234.233:3002/user",
            { email, firstName, lastName, password},
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": true,
              },
            }
          );
          
          if(signUpResponse.data.data.data) {
            alert("User Created")
            navigate('/login')
          }
  
  
      } catch (error) {
        if(error instanceof Error) {
            alert("User not created.")
        }
      }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-left-part">
                    <span>Register</span>
                    <p>Explore a large range of products and start shopping at your fingertips.</p>
                </div>
                <div className="login-right-part">
                    <form autoComplete='on' className='form' onSubmit={signUp}>
                        <div className="form-input-container">
                            <input type="email" placeholder='Enter email' onChange={(event) => onChangeEmail(event.target.value)}/>
                            <input type="text" placeholder='Enter first name' onChange={(event) => onChangeFirstName(event.target.value)}/>
                            <input type="text" placeholder='Enter last name' onChange={(event) => onChangeLastName(event.target.value)}/>
                            <input type="password" placeholder='Enter password' onChange={(event) => onChangePassword(event.target.value)}/>
                        </div>
                        <div className="form-tandc-container">
                            <p>By continuing your agree to Shopenza's </p>
                            <a href="" className="terms-of-use">Terms of Use</a>
                            <p>and</p>
                            <a href="" className="privacy-policy">Privacy Policy.</a>
                        </div>
                        <div className="submit-button-container">
                            <button className='submit-button'>Register</button>
                        </div>
                        <div className="form-login-container">
                            <NavLink to="/login" className="form-login-link">Already have an account ? Login</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
