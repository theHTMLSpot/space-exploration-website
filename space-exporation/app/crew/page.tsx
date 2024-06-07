"use client";

import { useState, useEffect } from 'react';
import styles from './crew.module.css';

export default function Crew() {
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
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.crew} id='destination'>
                <div className={styles.crewtext}>
                    <h1>Our Crew</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aspernatur molestias doloremque esse odio atque voluptate facere, delectus rem distinctio commodi soluta aut autem est nemo dolorum obcaecati quae quo!</p>
                </div>
                {error ? (
                    <p>Error fetching data: {error.message}</p>
                ) : !data ? (
                    <p>Loading...</p>
                ) : (
                    data.crew.map(crew => (
                        <div key={crew.name} className={styles.crewMember}>
                            <h2>{crew.name}</h2>
                            <img src={crew.images.png} alt={crew.name} />
                            <p>{crew.bio}</p>
                            <p><strong>Role:</strong> {crew.role}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}