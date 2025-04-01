import React from 'react';
import category from "../../asssets/Category/category";
import rect_icon from "../../asssets/rect_icon.png";
import ItemCateg from "../ItemCateg/ItemCateg";
import "./category.css";

const Category = () => {
  return (
    <section className='category container'>
      <header className="category-header">
        <div className="title1">
          <img 
            src={rect_icon} 
            alt="Category icon" 
            width={18} 
            height={45}
            loading="lazy"
          />
          <span>Categories</span>
        </div>
        
        <div className="title2">
          <h2>Browse By Category</h2>
        </div>
      </header>
      
      <div className="Category_item">
        {category.map((item) => (
          <ItemCateg 
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
      
      <hr className='ligne' aria-hidden="true" />
    </section>
  );
};

export default Category;