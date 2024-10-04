import React from "react";
import './About.css'
import  Aimg  from "../Assets/certificate.webp";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Tracom Academy</h1>
        <p>
          Tracom Academy is a premier training center that offers comprehensive
          education in full-stack web development and Point of Sale (POS) system
          training. Based in Nairobi, Kenya, we are dedicated to equipping
          students with the practical skills and knowledge they need to excel in
          the tech industry.
        </p>

        <div className="about-content">
          <div className="about-image">
            <img
              src={Aimg}
              alt="Training at Tracom Academy"
            />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower aspiring developers and IT professionals
              with industry-relevant skills. We focus on hands-on training to
              ensure our students are prepared for real-world challenges in
              software development and POS system management.
            </p>

            <h2>Our Vision</h2>
            <p>
              We envision a future where every individual has the opportunity to
              harness the power of technology. Tracom Academy aims to be a
              leading institution in tech education, shaping the future of tech
              talent in Africa and beyond.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>Comprehensive Full-Stack Development Courses</li>
              <li>Hands-on Point of Sale (POS) System Training</li>
              <li>Industry Expert Mentorship</li>
              <li>Access to Real Projects and Case Studies</li>
              <li>Career Development and Job Placement Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
