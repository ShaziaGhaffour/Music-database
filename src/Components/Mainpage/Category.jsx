import React, { useState } from 'react';
import './Category.css';

const Category = () => {
  const categories = [
    'All', 'Music', 'Podcasts', 'T-Series', 'Computer Science',
    'Game Shows', 'Motivation', 'Arabic Music', 'Live', 'Recently'
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="category">
      {categories.map((cat, index) => (
        <span
          key={index}
          className={activeCategory === cat ? 'active' : ''}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default Category;

