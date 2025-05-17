import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import Selection from './component/Selection';
import Footer from './component/Footer';
import MenJewellery from './component/MenJewellery';
import WomenJewellery from './component/WomenJewellery';
import Login from './component/Login';
// You can create Signup.js similarly if needed
// import Signup from './component/Signup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Signup from './component/Signup';

function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <br />
      <p>Your luxury, your style.</p>
      <Selection />
      <br />
      <br />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MenJewellery />} />
          <Route path="/women" element={<WomenJewellery />} />
          <Route path="/login" element={<Login />} />
          { <Route path="/signup" element={<Signup />} /> }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
