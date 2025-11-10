import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="about-content">
          <h1>About FundaNami</h1>
          <p>
            FundaNami was born from a simple idea — what if learning didn’t stop at the classroom door? 
            We believe that every student has something to teach and something to learn.
          </p>
          <p>
            Our platform connects peers through skill-sharing — from coding and cooking to DJing and design. 
            It’s a community that values access, collaboration, and empowerment.
          </p>
          <blockquote>
            “Knowledge grows when shared.”
          </blockquote>
          <p>
            Whether you want to level up your skills or earn income from your talents, FundaNami is where opportunity and learning meet.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
