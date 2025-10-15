import { useState, useEffect } from 'react'
import CardCharacters from '../components/Characters/CharacterCard'


const Characters = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://thesimpsonsapi.com/api/characters')
      .then(response => response.json())
      .then(data =>
        setCharacters(data.results)
      )
  }, [])

  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
      {
        characters.length > 0 ? characters.map(
          character => <CardCharacters key={character.id} data={character} />
        ) : <p>Cargando...</p>
      }
      </div>
  )
}

export default Characters