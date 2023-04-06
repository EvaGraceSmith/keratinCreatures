import { useState, useEffect } from 'react';

export default () => {
    const [beasts, setBeasts] = useState([]);

    async function fetchBeasts() {
        const response = await fetch('data.json');
        const data = await response.json();
        setBeasts(data);
    }

    useEffect(() => {
        fetchBeasts();
    });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem',
        }}>
          {
            beasts.map((beast) => (
                <a key={beast.id} data-tooltip={beast.name}>
                           <img key={beast._id} src={beast.image_url} alt={beast.title} /> 
                </a>
            ))
          }
        </div>
    );
};