import React from 'react';
import './cards.css'; 

function Cards({ name, type }) {
  const typeClass = type.toLowerCase() === 'vegetarian' ? 'veg' : 'non-veg';

  return (
    <div className={`card ${typeClass}`}>
      <div className="card-content">
        <div className="card-header">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
