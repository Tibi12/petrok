// ShopDescription.js
import React, { useState, useEffect } from 'react';
import '../css/shopDescription.css';

const ShopDescription = () => {
  const images = ['/images/bag1.png', '/images/bag2.png', '/images/bag3.png'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the current image index
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="full-width-description">
      <div className="changing-images">
        {/* Display the current image */}
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div className="description-content">
      <div className="header">Shreyas Bags</div>
        <h2>About Our Shop</h2>
        <p>
          Welcome to Petrok Bags! We offer a wide range of stylish and high-quality bags for every occasion. Our products are designed to meet your needs and complement your style. Explore our collection and find the perfect bag for you.
        </p>
      </div>
    </div>
  );
};

export default ShopDescription;
