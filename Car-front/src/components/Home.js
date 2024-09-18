
import React from 'react';
import '../styles/Home.css'; // Assuming you will style it with CSS
import { Link } from 'react-router-dom';


// Import images correctly using React's module system
import saveMoneyImg from '../images/savem.jpg';
import saveTimeImg from '../images/time.jpg';
import saveStressImg from '../images/stress.jpg';

// Import About Us component images
import image1 from '../images/images14.jpg';
import image2 from '../images/images13.jpg';
import image3 from '../images/images16.jpg';
import image4 from '../images/images11.jpg';

// Import Service logos
import carWashLogo from '../images/wash.jpg';
import conciergeOptionsLogo from '../images/concierge.jpg';
import closeAndHandyLogo from '../images/closeandhandy.jpg';
import safeAndSecureLogo from '../images/safeandsecure.jpg';

// Import background image
import backgroundImg from '../images/images.jpg'; // Update with actual path

import customerImage from '../images/customer.jpg'; // Update with actual path to the image

const Home = () => {
  return (
    <>
      {/* Main Home Section */}
      <section className="home" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1>The Best <br />Deals For Parking Lots</h1>
      <p>
        Our goal is to create an application for a parking lot system. As everyone visualizes projects differently, there may be many features that come into your mind.
      </p>
      <Link to="/contact-us" className="contact-btn">Contact Us</Link> {/* Updated button */}
    </section>
      {/* Car Park Selection Section */}
      <section className="car-park-section">
        <select className="dropdown">
          <option value="">Select Floor</option>
          <option value="floor1">Floor 1</option>
          <option value="floor2">Floor 2</option>
          <option value="floor3">Floor 3</option>
        </select>
        
        <input type="text" className="input-field" placeholder="Your Name" />
        <input type="text" className="input-field" placeholder="Your Phone Number" />
        <button type="button" className="btn2">Request a Call</button>
      </section>

      {/* Savings Section with Logo and Details */}
      <section className="savings-section">
        <div className="savings-content">
          <div className="savings-details">
            <div className="savings-item">
              <img src={saveMoneyImg} alt="Save Money" className="logo" />
              <h2>Save Money</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className="savings-item">
              <img src={saveTimeImg} alt="Save Time" className="logo" />
              <h2>Save Time</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className="savings-item">
              <img src={saveStressImg} alt="Save Stress" className="logo" />
              <h2>Save Stress</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <section className="content-wrapper">
          <section className="image-gallery">
            <img src={image1} alt="Feature 1" className="gallery-image" />
            <img src={image2} alt="Feature 2" className="gallery-image" />
            <img src={image3} alt="Feature 3" className="gallery-image" />
            <img src={image4} alt="Feature 4" className="gallery-image" />
          </section>
          <section className="why-choose-us">
            <h2>Why Choose Us</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <button type="button" className="read-more-btn">Read More</button>
          </section>
        </section>
      </section>

      <section className="services">
  <h2>Our Services</h2>
  <div className="services-content">
    <div className="service-item">
      <img src={carWashLogo} alt="Car Wash" className="service-logo" />
      <h3>Car Wash</h3>
      <p>When a vehicle pulls into the parking lot, the application takes the vehicle's type, registration number, and its color. You can also have additional details like the vehicle's name, the driver's name, and so on.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
    <div className="service-item">
      <img src={conciergeOptionsLogo} alt="Concierge Options" className="service-logo" />
      <h3>Concierge Options</h3>
      <p>Each slot in the parking lot has a type of vehicle that can park there. Valid types are car, bike, and truck. You can include any vehicle type as per your needs.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
    <div className="service-item">
      <img src={closeAndHandyLogo} alt="Close And Handy" className="service-logo" />
      <h3>Close And Handy</h3>
      <p>After that, a slot is assigned to the vehicle. The selection strategy could be anything you want. Here, we will choose the lowest floor and earliest available slot.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
    <div className="service-item">
      <img src={safeAndSecureLogo} alt="Safe And Secure" className="service-logo" />
      <h3>Safe And Secure</h3>
      <p>To unpark the vehicle, the user should present the valid ticket. After that, the vehicle is removed from the slot.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
  </div>
</section>


      {/* Parking Options and Rates Section */}
      <section className="rates">
  <h2>Parking Options and Rates</h2>
  <div className="rates-container">
    <div className="rate-option">
      <h3>$30 /day</h3>
      <h4>Basic</h4>
      <p>Long established fact a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
    <div className="rate-option">
      <h3>$40 /day</h3>
      <h4>Standard</h4>
      <p>Long established fact a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
    <div className="rate-option">
      <h3>$50 /day</h3>
      <h4>Premium</h4>
      <p>Long established fact a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button type="button" className="read-more-btn">Read More</button>
    </div>
  </div>
</section>


      {/* What Our Customers Say Section */}
      <section className="customers-say">
  <h2>What Our Customers Say</h2>
  <div className="customer-testimonial">
    <div className="testimonial-item">
      <img src={customerImage} alt="Customer" className="customer-image" /> {/* Add this line */}
      <p>"This is handled by the parkVehicle() method. If a slot is not available, then the method prints an error message. Now, if the vehicle wants to unpark, it has to show the ticket. The system parses the ticket, finds out which slot the vehicle is parked in and frees up the slot. The unPark() method takes in the ticket and frees up the corresponding slot."</p>
      <h4>jakily john</h4>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
