import React, { useState } from 'react';
import './MenJewellery.css';
import Navbar from './Navbar';
import Footer from './Footer';

const menJewelleryItems = [
  {
    id: 1,
    name: 'Gold Chain',
    price: 299.99,
    image: require('./images/jewelleryimage1.png'),
  },
  {
    id: 2,
    name: 'Silver Bracelet',
    price: 149.99,
    image: require('./images/jewelleryimage2.jpg'),
  },
  {
    id: 3,
    name: 'Diamond Ring',
    price: 499.99,
    image: require('./images/jewelleryimage3.jpg'),
  },
  {
    id: 4,
    name: 'Platinum Necklace',
    price: 699.99,
    image: require('./images/jewelleryimage4.jpg'),
  },
];

const MenJewellery = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const buyNow = (item) => {
    alert(`Proceeding to buy: ${item.name} for $${item.price}`);
  };

  return (
    <>
      <Navbar />
      <div className="men-jewellery-container">
        <h1>Men's Jewellery Collection</h1>
        <div className="jewellery-grid">
          {menJewelleryItems.map((item) => (
            <div key={item.id} className="jewellery-card">
              <img src={item.image} alt={item.name} className="jewellery-image" />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="button-group">
                <button onClick={() => addToCart(item)} className="add-cart-btn">Add to Cart</button>
                <button onClick={() => buyNow(item)} className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenJewellery;
