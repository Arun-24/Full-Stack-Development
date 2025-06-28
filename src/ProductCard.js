import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
