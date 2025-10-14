import { useState, useEffect } from "react";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/episodes")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar los episodios");
        return response.json();
      })
      .then((data) => {
        setEpisodes(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-3 text-center">pisodios de Los Simpsons</h1>
      <div className="list-group">
        {episodes.map((episode) => (
          <div key={episode.id} className="list-group-item">
            <h5>{episode.name}</h5>
            <p>
              <strong>Temporada:</strong> {episode.season} <br />
              <strong>Episodio:</strong> {episode.number} <br />
              <strong>Fecha de emisión:</strong> {episode.air_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
