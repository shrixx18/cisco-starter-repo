import React from 'react';
import './CardComponent.css'; // 

const Card = ({ heading, children }) => {
  return (
    <div className="card">
      <h2 className="card-heading">{heading}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
