import React from "react";
import "./Hero.css";
import folder from '/tracom_services_cover.jpg';
import himg from '../../Assets/html.png';
import Ricon from '../../Assets/react.svg';
import Picon from '../../Assets/payment.png';



function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Tomorrow's Full-Stack Developers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            deserunt enim, quaerat aliquid id obcaecati.
          </p>
          <button className="hero-button">Apply Now</button>
        </div>
      </section>
      <section className="about">
        <h2>Why Tracom Academy?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          autem repellendus dolore earum aliquid asperiores eum eius fugit,
          maiores vitae illum consequuntur pariatur ducimus corrupti. Commodi
          provident laudantium nemo repellendus!
        </p>
        <img src={folder} alt="Students learning" className="about-img" />
      </section>
      <section className="curriculum">
        <h2>What is Offered...</h2>
        <div className="courses">
          <div className="module">
          <img src={himg} alt="HTML Icon" />
            <h3>Front-End Development</h3>
            <p>
              Learn HTML, CSS, and JavaScript to build beautiful, responsive
              websites.
            </p>
          </div>
          <div className="module">
            <img src={Ricon} />
            <h3>React Programming</h3>
            <p>Master React to build great web applications.</p>
          </div>
          <div className="module">
            <img src={Picon} />
            <h3>POS Training</h3>
            <p>Master payment modules to easen payment processes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
