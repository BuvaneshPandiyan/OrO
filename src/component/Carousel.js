// src/Carousel.js
import React from 'react';
import Slider from 'react-slick'; // Importing react-slick
import './Carousel.css'; // Custom CSS for carousel styling

// Import the images from the 'images' folder inside the src directory
import Image1 from './images/image1.jpg';  // Update the image path here
import Image2 from './images/image2.jpg';  // Update the image path here
import Image3 from './images/image3.jpg';  // Update the image path here
import Image4 from './images/image4.jpg';  // Update the image path here
import Image5 from './images/image5.jpg';  // Add Image 5
import Image6 from './images/image6.jpg';  // Add Image 6
import Image7 from './images/image7.jpg';  // Add Image 7
import Image8 from './images/image8.jpg';  // Add Image 8
import Image9 from './images/image9.jpg';  // Add Image 9
import Image10 from './images/image10.jpg'; // Add Image 10

const Carousel = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 item at a time (since you want to move from one image to the next)
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000, // Move to the next slide every 10 seconds (10000 ms)
    pauseOnHover: true, // Pause autoplay when hover
    responsive: [
      {
        breakpoint: 1024, // At 1024px screen width, show 1 item
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // At 600px screen width, show 1 item
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // At 480px screen width, show 1 item
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src={Image1} alt="Jewelry 1" className="carousel-image" /> {/* Image 1 */}
        </div>
        <div className="carousel-item">
          <img src={Image2} alt="Jewelry 2" className="carousel-image" /> {/* Image 2 */}
        </div>
        <div className="carousel-item">
          <img src={Image3} alt="Jewelry 3" className="carousel-image" /> {/* Image 3 */}
        </div>
        <div className="carousel-item">
          <img src={Image4} alt="Jewelry 4" className="carousel-image" /> {/* Image 4 */}
        </div>
        <div className="carousel-item">
          <img src={Image5} alt="Jewelry 5" className="carousel-image" /> {/* Image 5 */}
        </div>
        <div className="carousel-item">
          <img src={Image6} alt="Jewelry 6" className="carousel-image" /> {/* Image 6 */}
        </div>
        <div className="carousel-item">
          <img src={Image7} alt="Jewelry 7" className="carousel-image" /> {/* Image 7 */}
        </div>
        <div className="carousel-item">
          <img src={Image8} alt="Jewelry 8" className="carousel-image" /> {/* Image 8 */}
        </div>
        <div className="carousel-item">
          <img src={Image9} alt="Jewelry 9" className="carousel-image" /> {/* Image 9 */}
        </div>
        <div className="carousel-item">
          <img src={Image10} alt="Jewelry 10" className="carousel-image" /> {/* Image 10 */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
