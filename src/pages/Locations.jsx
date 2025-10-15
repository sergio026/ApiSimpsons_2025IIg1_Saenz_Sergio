import { useState, useEffect } from "react";
import LocationListItem from "../components/Locations/Locations";
import Pagination from '../components/Pagination/Pagination'

function Locations() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


  const fetchLocations = async (pageNum) => {
    try {
      const response = await fetch(`https://thesimpsonsapi.com/api/locations?page=${pageNum}`)
      const data = await response.json()
      setLocations(data.results)
      setTotalPages(data.total_pages || 24)
    } catch (error) {
      console.error('Error al obtener lugares:', error)
    }
  }


useEffect(() => {
    fetchLocations(page)
  }, [page])

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages))

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-warning">Lugares Icónicos de Los Simpsons</h1>

      <div className="locations-container">
        {locations.length > 0 ? (
          locations.map((location) => (
            <LocationListItem key={location.id} data={location} />
          ))
        ) : (
          <p className="text-center">No se encontraron lugares.</p>
        )}
      </div>
      <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
}

export default Locations;
