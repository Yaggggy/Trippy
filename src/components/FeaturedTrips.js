import React from "react";
import TripCard from "./TripCard";
import "./FeaturedTrips.css";

const featuredTripsData = [
  {
    id: 1,
    name: "Goa Beach Adventure",
    image: "",
  },
  {
    id: 2,
    name: "Himalayan Trek",
    image: "",
    description: "Explore the beautiful mountains",
  },
  {
    id: 3,
    name: "Rajasthan Heritage Tour",
    image: "",
    description: "Discover the royal heritage of Rajasthan",
  },
];

function FeaturedTrips() {
  return (
    <section className="featured-trips">
      <h2>Featured Trips</h2>
      <div className="trip-list">
        {featuredTripsData.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedTrips;
