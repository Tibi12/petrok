// src/App.js
import React from 'react';
import './App.css';
import ProductList from '../src/components/productList';
import './App.css';
import '../src/css/product.css';
import '../src/css/productList.css';
import ShopDescription from '../src/components/shopDescription'
import AboutFooter from './components/AboutFooter';

function App() {
  return (
    <div className="App">
      <div className="background-animation"></div>
      {/* <h1>Sreyas Bags</h1> */}
      <ShopDescription />
      <ProductList />
      <AboutFooter />
    </div>
  );
}

export default App;
