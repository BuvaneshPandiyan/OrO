import React, { useState } from 'react';
import './MenJewellery.css'; // Using the same CSS for consistent styling
import Navbar from './Navbar';
import Footer from './Footer';

const womenJewelleryItems = [
  {
    id: 1,
    name: 'Pearl Necklace',
    price: 199.99,
    image: require('./images/jewelleryimage1.png'),
  },
  {
    id: 2,
    name: 'Gold Earrings',
    price: 129.99,
    image: require('./images/jewelleryimage2.jpg'),
  },
  {
    id: 3,
    name: 'Diamond Pendant',
    price: 349.99,
    image: require('./images/jewelleryimage3.jpg'),
  },
  {
    id: 4,
    name: 'Rose Gold Bracelet',
    price: 279.99,
    image: require('./images/jewelleryimage4.jpg'),
  },
];

const WomenJewellery = () => {
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
        <h1>Women's Jewellery Collection</h1>
        <div className="jewellery-grid">
          {womenJewelleryItems.map((item) => (
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

export default WomenJewellery;
