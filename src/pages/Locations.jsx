import { useState, useEffect } from "react";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <h1 className="mb-4 text-center">Lugares Icónicos de Los Simpsons</h1>

      <div className="row g-4">
        {locations.length > 0 ? (
          locations.map((location) => (
            <div key={location.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{location.name}</h5>
                  <p className="card-text">
                    <strong>Tipo:</strong> {location.type || "Desconocido"} <br />
                    <strong>Descripción:</strong>{" "}
                    {location.description
                      ? location.description
                      : "Sin descripción disponible."}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron lugares.</p>
        )}
      </div>
    </div>
  );
}

export default Locations;
