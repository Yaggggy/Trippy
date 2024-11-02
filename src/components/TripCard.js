import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.name} />
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
      <Link to={`/trips/${trip.id}`}>View Details</Link>
    </div>
  );
}

export default TripCard;
