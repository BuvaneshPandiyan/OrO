// src/component/Selection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Selection.css';

import menImage from './images/menimage.png';
import womenImage from './images/womenimage.png';

const Selection = () => {
  return (
    <div className="selection-container">
      <Link to="/men" className="selection-item">
        <img src={menImage} alt="Men" />
        <span className="text">Men</span>
      </Link>
      <br />
      <br/>
      <Link to="/women" className="selection-item">
        <img src={womenImage} alt="Women" />
        <span className="text">Women</span>
      </Link>
    </div>
  );
};

export default Selection;
