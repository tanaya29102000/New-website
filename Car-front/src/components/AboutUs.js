import React from 'react';
import '../styles/AboutUs.css';
import image1 from '../images/images14.jpg';
import image2 from '../images/images13.jpg';
import image3 from '../images/images16.jpg';
import image4 from '../images/images11.jpg';

const AboutUs = () => {
  return (
    <div className="about">
      <section className="content-wrapper">
        <section className="image-gallery">
          <img src={image1} alt="Feature 1" className="gallery-image" />
          <img src={image2} alt="Feature 2" className="gallery-image" />
          <img src={image3} alt="Feature 3" className="gallery-image" />
          <img src={image4} alt="Feature 4" className="gallery-image" />
        </section>
        
        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are...</p>
          <button type="button" className="read-more-btn">Read More</button>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
