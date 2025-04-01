import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import aside_sign_img from '../../asssets/aside_sign_img.png'
import '../CSS/Login.css'

const Login = () => {
  const [formData, setformData] = useState({
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/Login', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const responseData = await response.json();
      
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  }

  return (
    <div className='login-container'>
      <div className="login-image">
        <img src={aside_sign_img} alt="Login illustration" />
      </div>
      
      <div className="login-form-container">
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='login-title'>Login to your account</h1>
          <p className='login-subtitle'>Enter your details below</p>
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder='Email or Phone Number' 
              name='email' 
              className='login-input no-outline' 
              value={formData.email} 
              onChange={changeHandler}
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder='Password' 
              name='password' 
              className='login-input no-outline' 
              value={formData.password} 
              onChange={changeHandler}
              required
            />
          </div>
          
          <button type='submit' className="login-button">Sign In</button>
          
          <p className='login-footer'>
            Don't Have an Account? 
            <Link to="/Register" className='login-link'>
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;