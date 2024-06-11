"use client";

import { useState, useEffect } from "react";
import styles from './tech.module.css';

interface Technology {
    name: string;
    description: string;
    images: {
        portrait: string;
        landscape: string;
    };
}

interface Data {
    technology: Technology[];
}

function Technology() {
    const [data, setData] = useState<Data | null>(null); // Use null to indicate the initial state before data is fetched
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch('/json/data.json') // Use a leading slash to ensure it's treated as a root-relative path
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then((jsonData: Data) => {
                console.log('Fetched data:', jsonData);
                setData(jsonData);
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
                setError(error);
                setData(null);
            });
    }, []);

    const tech = data ? data.technology.map(technology => (
        <div key={technology.name} className={styles.technologyItem}>
            <h2>{technology.name}</h2>
            <img src={technology.images.portrait} alt={technology.name} />
            <p>{technology.description}</p>
        </div>
    )) : null;

    return (
        <div className={styles.page}>
            <div className={styles.technology} id='destination'>
                <div className={styles.crewtext}>
                    <h1>Our Crew</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aspernatur molestias doloremque esse odio atque voluptate facere, delectus rem distinctio commodi soluta aut autem est nemo dolorum obcaecati quae quo!</p>
                </div>
                {error ? (
                    <p>Error fetching data: {error.message}</p>
                ) : !data ? (
                    <p>Loading...</p>
                ) : (
                    tech
                )}
            </div>
        </div>
    );
}

export default Technology;