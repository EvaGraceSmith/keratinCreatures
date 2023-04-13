import { useState, useEffect } from 'react';
import Likes from './Likes'


export default ({onChoice, numberOfHornsRequested}) => {
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem',
        }}>
            {
                beasts.filter((item)=> numberOfHornsRequested == 0 || item.horns == numberOfHornsRequested)
                .map((beast) => (
                    <a onClick={ () => {onChoice(beast)}}key={beast.id} data-tooltip={beast.title}>
                        <article>
                            <img key={beast._id} src={beast.image_url} alt={beast.title} />
                            <h2>{beast.title}</h2>
                            <Likes />
                        </article>
                    </a>

                ))
            }
        </div>
    );
};