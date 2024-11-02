import React, { useEffect, useState } from "react";
import axios from "../services/api";
import TripCard from "../components/TripCard";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get("/trips").then((response) => setTrips(response.data));
  }, []);

  return (
    <div>
      <h2>Explore Trips</h2>
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default Trips;
