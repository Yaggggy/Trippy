import React from "react";
import FeaturedTrips from "../components/FeaturedTrips";
import TestimonialCard from "../components/TestimonialCard";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Discover Unique Travel Experiences</h1>
        <p>Personalized itineraries, real-time updates, and more</p>
        <a href="/trips" className="cta-button">
          Get Started
        </a>
      </section>

      <FeaturedTrips />

      <section className="testimonials-section">
        <h2>What Our Travelers Say</h2>
        <div className="testimonials">
          <TestimonialCard name="Yaggy" comment="Amazing experience!" />
          <TestimonialCard name="Again Yaggy" comment="Best travel platform!" />
          <TestimonialCard name="Fir se Yaggy" comment="Highly recommended!" />
        </div>
      </section>
    </div>
  );
}

export default Home;
