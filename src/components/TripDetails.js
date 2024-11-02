import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function TripDetails({ match }) {
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        axios.get(`/trips/${match.params.id}`).then((response) => setTrip(response.data));
    }, [match.params.id]);

    if (!trip) return <p>Loading...</p>;

    return (
        <div>
            <h1>{trip.name}</h1>
            <p>{trip.description}</p>
            <img src={trip.image} alt={trip.name} />
            <button>Book Now</button>
        </div>
    );
}

export default TripDetails;
