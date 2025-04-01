import React from 'react';
import '../CSS/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <span>Account</span> / <span>My Account</span> / <span>Product</span> / <span>View Cart</span> / <span>CheckOut</span>
      </div>

      <div className="checkout-content">
        {/* Billing Details Form */}
        <section className="billing-section">
          <h2>Billing Details</h2>
          <form className="billing-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input type="text" id="firstName" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Street Address*</label>
              <input type="text" id="address" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input type="text" id="apartment" />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Town/City*</label>
                <input type="text" id="city" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" required />
            </div>
          </form>
        </section>

        {/* Order Summary */}
        <section className="order-section">
          <div className="order-summary">
            <h3>Your Order</h3>
            <div className="order-items">
              <div className="order-item">
                <span>LCD Monitor</span>
                <span>$650</span>
              </div>
              <div className="order-item">
                <span>Hi Gamepad</span>
                <span>$100</span>
              </div>
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total-row grand-total">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            <div className="payment-methods">
              <h4>Payment</h4>
              <div className="bank-option">
                <span>Bank</span>
                <span>USA</span>
                <span>View</span>
              </div>
              <div className="payment-option">
                <input type="radio" id="cod" name="payment" checked />
                <label htmlFor="cod">Cash on delivery</label>
              </div>
            </div>

            <div className="coupon-apply">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>

            <button className="place-order">Place Order</button>

            <div className="save-info">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;