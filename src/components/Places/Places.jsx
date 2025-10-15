import React from "react";
import "../Places/Places.css";

const LocationListItem = ({ data }) => {
    return (
        <div className="location-item">
            <img
                src={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
                alt={data.name}
                className="location-thumb"
            />

            <div className="location-info">
                <h3>{data.name}</h3>
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>Ciudad:</strong> {data.town || "Desconocida"}</p>
                <p><strong>Uso:</strong> {data.use || "No especificado"}</p>
            </div>
        </div>
    );
};

export default LocationListItem;
