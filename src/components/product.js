// src/Product.js
import React from 'react';

const Product = ({ product }) => {
  // const imageUrl = process.env.NODE_ENV === 'production'
  //   ? `/${process.env.REACT_APP_REPOSITORY_NAME}/${product.imageUrl}`
  //   : process.env.PUBLIC_URL + product.imageUrl;
  const imageUrl = process.env.NODE_ENV === 'production'
  ? `${process.env.PUBLIC_URL}${product.imageUrl}`
  : process.env.PUBLIC_URL + product.imageUrl;
  console.log('Constructed imageUrl:', imageUrl);
  return (
    <div className="product">
      <img src={imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
