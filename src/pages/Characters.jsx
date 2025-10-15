// import { useState, useEffect } from 'react'
// import CardCharacters from '../components/Characters/CharacterCard'


// const Characters = () => {

//   const [characters, setCharacters] = useState([])

//   useEffect(() => {
//     fetch('https://thesimpsonsapi.com/api/characters')
//       .then(response => response.json())
//       .then(data =>
//         setCharacters(data.results)
//       )
//   }, [])

//   return (
//     <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
//       {
//         characters.length > 0 ? characters.map(
//           character => <CardCharacters key={character.id} data={character} />
//         ) : <p>Cargando...</p>
//       }
//       </div>
//   )
// }

// export default Characters

import { useState, useEffect } from 'react'
import CardCharacters from '../components/Characters/CharacterCard'
import Pagination from '../components/Pagination/Pagination'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchCharacters = async (pageNum) => {
    try {
      const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${pageNum}`)
      const data = await response.json()
      setCharacters(data.results)
      setTotalPages(data.total_pages || 60)
    } catch (error) {
      console.error('Error al obtener personajes:', error)
    }
  }

  useEffect(() => { fetchCharacters(page) }, [page])

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',alignItems: 'flex-start',gap: '20px',width: '100%', }} >
        
      {characters.length > 0 ? (
        characters.map((character) => <CardCharacters key={character.id} data={character} />)
      ) : (
        <p>Cargando personajes...</p>
      )}
      </div>
      <div style={{ marginTop: '21px' }}>
        <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  )
}

export default Characters
