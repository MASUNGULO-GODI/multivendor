import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import aside_sign_img from '../../asssets/aside_sign_img.png'
import google from '../../asssets/google.png'
import '../CSS/SignUp.css'

const SignUp = () => {
  const [formData, setformData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    console.log('Sign up function executed', formData)
    let responseData;
    
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
      
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/Login");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  }

  return (
    <div className='signup-container'>
      <div className="signup-image">
        <img src={aside_sign_img} alt="Signup illustration" />
      </div>
      
      <div className="signup-form-container">
        <form className='signup-form' onSubmit={handleSubmit}>
          <h1 className='signup-title'>Create an account</h1>
          <p className='signup-subtitle'>Enter your details below</p>
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder='Name' 
              name='name' 
              className='clean-input' 
              value={formData.name} 
              onChange={changeHandler}
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder='Email or Phone Number' 
              name='email' 
              className='clean-input' 
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
              className='clean-input' 
              value={formData.password} 
              onChange={changeHandler}
              required
            />
          </div>
          
          <button type='submit' className="signup-button">Create Account</button>
          
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">or</span>
            <span className="divider-line"></span>
          </div>
          
          <button type='button' className='google-button'>
            <img src={google} alt="Google logo" className='google-icon' />
            Sign up with Google
          </button>
          
          <p className='signup-footer'>
            Already have an account? 
            <Link to="/Login" className='signup-link'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp