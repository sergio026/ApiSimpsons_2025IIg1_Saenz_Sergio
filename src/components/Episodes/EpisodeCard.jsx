import React, { useState } from 'react';
import '../Episodes/Episode.css';

const EpisodeCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const maxLength = 80;

  const shortText =
    data.synopsis.length > maxLength? data.synopsis.slice(0, maxLength) + '...': data.synopsis;
    return (
      <div className="episode-list-item">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
          alt={data.name}
          className="episode-thumb"
        />
  
        <div className="episode-info">
          <div className="episode-header">
            <h3>{data.name}</h3>
            <span className="episode-id">#{data.id}</span>
          </div>
  
          <p><strong>Temporada:</strong> {data.season}</p>
          <p><strong>Episodio:</strong> {data.episode_number}</p>
          <p><strong>Fecha de emisión:</strong> {data.airdate || 'Desconocida'}</p>
          <p className="episode-synopsis">
            <strong>Sinopsis:</strong> {expanded ? data.synopsis : shortText}
          </p>
  
          {data.synopsis.length > maxLength && (
            <button className="expand-btn" onClick={toggleExpand}>
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
      </div>
    );
  };
  
export default EpisodeCard;
