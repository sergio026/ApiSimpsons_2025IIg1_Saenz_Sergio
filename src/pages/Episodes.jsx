import { useState, useEffect } from 'react';
import EpisodeCard from '../components/Episodes/EpisodeCard';
import Pagination from '../components/Pagination/Pagination'

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


  const fetchEpisodes = async (pageNum) => {
    try {
      const response = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${pageNum}`)
      const data = await response.json()
      setEpisodes(data.results)
      setTotalPages(data.total_pages || 39)
    } catch (error) {
      console.error('Error al obtener episodios:', error)
    }
  }

  useEffect(() => {
    fetchEpisodes(page)
  }, [page])

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <div style={{
      minHeight: 'calc(100vh - 150px)', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', padding: '20px',
    }}>
      {episodes.length > 0 ? (episodes.map((ep) => <EpisodeCard key={ep.id} data={ep} />)
      ) : (
        <p>Cargando episodios...</p>
      )}
      <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
    </div>

  );
};

export default Episodes;
