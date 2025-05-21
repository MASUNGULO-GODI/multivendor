import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('auth-token');
      try {
        const response = await fetch('http://localhost:3000/getCart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          setCartItems(Array.isArray(data.cart) ? data.cart : []);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const removeFromCart = async (itemId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCartItems((prev) => prev.filter(item => item.id !== itemId));
    
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:3000/RemoveFromCart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId, user: user }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error removing from cart', error));
    } else {
      alert("Please authenticate first, so you can add your items to your cart");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className='cart-container'>
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-header">
        <div>Products</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="product-img-remove">
              <i className="bi bi-x remove-icon" onClick={() => removeFromCart(item.id)}></i>
              <img src={item.image} alt={item.name} className='product-image' />
            </div>
            <div className="price">${item.newPrice.toFixed(2)}</div>
            <div className="quantity">{item.quantity}</div>
            <div className="subtotal">${(item.newPrice * item.quantity).toFixed(2)}</div>
          </div>
        ))
      )}

      <div className="cart-buttons">
        <Link to='/'>
          <button className='return-button'>Return To Shop</button>
        </Link>
        <button className='checkout-button' onClick={handleCheckout}>Proceed To Checkout</button>
      </div>

      <div className="coupon-section">
        <input type='text' className='coupon-input' placeholder='Coupon Code' />
        <button className='apply-coupon-button'>Apply</button>
      </div>
    </div>
  );
};

export default Cart;
