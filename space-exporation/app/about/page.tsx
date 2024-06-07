"use client";

import styles from './about.module.css';
import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null); // Use null to indicate the initial state before data is fetched
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/json/data.json') // Use a leading slash to ensure it's treated as a root-relative path
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(jsonData => {
      console.log('Fetched data:', jsonData);
      setData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching the data:', error);
      setError(error);
      setData(null);
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className={styles.body}>
      <div className={styles.herotext}>
        <h4>About Us</h4>
        <h1>Our Journey</h1>
        <p>We are a team of passionate explorers dedicated to making space travel accessible to everyone. Our mission is to provide an unforgettable experience that takes you beyond the boundaries of Earth and into the vastness of space.</p>
        <p>Our journey began with a dream to explore the unknown and share that adventure with the world. With cutting-edge technology and a commitment to safety, we offer you the chance to witness the beauty of our universe up close.</p>
      </div>
      <button className={styles.calltoaction}><a href='#destination'>Come Along</a></button>

      <div className={styles.destination} id='destination'>
        <h1>Destinations</h1>
        {error ? (
          <p>Error fetching data: {error.message}</p>
        ) : !data ? (
          <p>Loading...</p>
        ) : (
          data.destinations.map(destination => (
            <div key={destination.name} className={destination.class}>
              <h2>{destination.name}</h2>
              <img src={destination.images.png} alt={destination.name} />
              <p>{destination.description}</p>
              <p><strong>Distance:</strong> {destination.distance}</p>
              <p><strong>Travel Time:</strong> {destination.travel}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}