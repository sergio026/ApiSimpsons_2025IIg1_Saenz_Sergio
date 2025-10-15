import { useState, useEffect } from "react";
import LocationListItem from "../components/Places/Places";


function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/locations")
      .then((response) =>  response.json())
      .then((data) => setLocations(data.results ))
      .catch((err) =>  console.error('Error al obtener Lugares:', err))
  }, []);


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
    </div>
  );
}

export default Locations;
