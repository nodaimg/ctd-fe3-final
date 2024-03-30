import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, onAddToFavorites }) => {

  const addFav = () => {
    try {
      // Obtener los favoritos actuales del localStorage
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
      // Verificar si la tarjeta ya está en favoritos
      if (!favorites.includes(id)) {
        // Agregar el ID de la tarjeta a los favoritos
        favorites.push(id);
        // Actualizar los favoritos en el localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
        // Ejecutar la función de agregar a favoritos del componente padre (si se proporciona)
        if (onAddToFavorites) {
          onAddToFavorites(id);
        }
        // Mostrar un mensaje de éxito (puedes ajustarlo según tus necesidades)
        console.log(`Card with ID ${id} added to favorites.`);
      } else {
        // Mostrar un mensaje si la tarjeta ya está en favoritos
        console.log(`Card with ID ${id} is already in favorites.`);
      }
    } catch (error) {
      console.error('Error adding card to favorites:', error);
    }
  }

  return (
    <div className="card">
      {/* Mostrar el nombre, username y id */}
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      {/* Integrar el Link hacia la página de detalle del dentista */}
      <Link to={`/dentist/${id}`} className="detailLink">View Details</Link>

      {/* Botón para agregar a favoritos */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

