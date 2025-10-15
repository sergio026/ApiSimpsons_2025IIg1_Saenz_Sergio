import { useState, useEffect } from "react";
import LocationListItem from "../components/Places/Places";


function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/locations")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar los lugares");
        return response.json();
      })
      .then((data) => {
        setLocations(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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
