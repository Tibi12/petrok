// src/ProductList.js
import React from 'react';
import Product from './product';
import products from '../products';

const ProductList = () => {
    return (
        <div className="product-list">
            <div>
                <h2 className="products-heading">Products</h2>
                <div className="products">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
