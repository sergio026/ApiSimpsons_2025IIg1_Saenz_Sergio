import { useState, useEffect } from 'react';
import EpisodeCard from '../components/Episodes/EpisodeCard';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://thesimpsonsapi.com/api/episodes')
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.error('Error al obtener episodios:', error));
  }, []);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 150px)', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', padding: '20px',
      }}
    >
      {episodes.length > 0 ? (
        episodes.map((ep) => <EpisodeCard key={ep.id} data={ep} />)
      ) : (
        <p>Cargando episodios...</p>
      )}
    </div>
  );
};

export default Episodes;
