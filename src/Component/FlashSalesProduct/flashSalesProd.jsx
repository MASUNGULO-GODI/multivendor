import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import flashSalesProd from "../../asssets/Products/bestSellerProducs";
import rect_icon from '../../asssets/rect_icon.png';
import Item from '../Item/Item';
import './flashSalesProd.css';

const FlashSalesProd = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + 
                           prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return prev;
        }
        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Navigation logic
  const totalProducts = flashSalesProd.length;
  const nextProducts = () => setCurrentIndex(prev => Math.min(prev + 1, totalProducts - 1));
  const prevProducts = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section className="flash-sales-container">
      <div className="sales-header">
        <div className="title-container">
          <img src={rect_icon} alt="" className="title-icon" />
          <span className="today-text">Today's</span>
        </div>
        
        <div className="timer-section">
          <div className="title-wrapper">
            <h2 className="sales-title">Flash Sales</h2>
            
          </div>
          
          {!isLoading && (
            <div className="countdown-timer" aria-live="polite">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div className="time-unit" key={unit}>
                  <span className="time-value">{value.toString().padStart(2, '0')}</span>
                  <span className="time-label">{unit.toUpperCase()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="products-loading">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="product-skeleton"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="products-grid">
            {flashSalesProd.map((item) => (
              <Item 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                discount={item.discount}
                oldprice={item.oldprice}
                newprice={item.newprice}
                rating={item.rating}
              />
            ))}
          </div>

          <div className="mobile-nav-buttons">
            <button 
              onClick={prevProducts} 
              disabled={currentIndex === 0}
              aria-label="Previous products"
            >
              &lt;
            </button>
            <button 
              onClick={nextProducts} 
              disabled={currentIndex >= totalProducts - 1}
              aria-label="Next products"
            >
              &gt;
            </button>
          </div>

          <div className="view-all-container">
            <Link to="/collections" className="view-all-btn">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default FlashSalesProd;