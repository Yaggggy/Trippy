import React from "react";
import "./TestimonialCard.css";

function TestimonialCard({ name, comment }) {
  return (
    <div className="testimonial-card">
      <p>"{comment}"</p>
      <h3>- {name}</h3>
    </div>
  );
}

export default TestimonialCard;
