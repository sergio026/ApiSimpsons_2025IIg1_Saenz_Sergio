import React, { useState } from 'react';
import '../../src/style/Character/CharacterCard.css';

const CharacterCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const max_palabras = 80;

  const phrasesText = data.phrases.join(', ');
  const shortText = phrasesText.length > max_palabras ? phrasesText.slice(0, max_palabras) + '...' : phrasesText;

  return (
    <div className="card-character">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
        alt={data.name}
        className="character-image"
      />

      <h2>{data.name}</h2>

      <div className="character-info">
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Edad:</strong> {data.age}</p>
        <p><strong>Nacimiento:</strong> {data.birthdate}</p>
        <p><strong>Género:</strong> {data.gender}</p>
        <p><strong>Ocupación:</strong> {data.occupation}</p>

        <p>
          <strong>Frases:</strong>{' '}
          {expanded ? phrasesText : shortText}
        </p>

        {phrasesText.length > max_palabras && (
          <button className="expand-btn" onClick={toggleExpand}>
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
