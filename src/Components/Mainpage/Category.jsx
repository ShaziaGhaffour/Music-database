import React from 'react';
import './category.css';          

const Category = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    'All', 'Music','Pop', 'Jazz', 'Rock', 'Hip Hop', 'Classical', 'Electronic', 'Reggae',
    'Chill', 'Live', 'Motivation'
  ];

  return (
    <div className="category">
      {categories.map((cat, index) => (
        <span
          key={index}
          className={activeCategory === cat ? 'active' : ''}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default Category;


