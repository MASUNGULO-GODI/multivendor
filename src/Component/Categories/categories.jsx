import React, { useState } from 'react';
import './categories.css';

const categoryList = [
  { name: "Women's Fashion", path: "/women-fashion" },
  { name: "Men's Fashion", path: "/mens-fashion" },
  { name: "Electronics", path: "/electronics" },
  { name: "Home & Lifestyle", path: "/home-lifestyle" },
  { name: "Medicine", path: "/medicine" },
  { name: "Sports & Outdoor", path: "/sports-outdoor" },
  { name: "Babies & Toys", path: "/babies-toys" },
  { name: "Groceries & Pets", path: "/groceries-pets" },
  { name: "Health & Beauty", path: "/health-beauty" }
];

const Categories = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Categories
        <span className={`caret ${open ? 'rotate' : ''}`}>▼</span>
      </button>
      <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
        {categoryList.map((cat, idx) => (
          <li key={idx} className="dropdown-item">
            <a href={cat.path}>
              {cat.name}
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
