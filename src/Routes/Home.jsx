import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import ThemeContext from '../contexts/ThemeContext'; // Importa el contexto del tema aquí

const Home = () => {
  const { theme } = useContext(ThemeContext); // Obtiene el tema del contexto
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/usersurl_de_tu_api/dentists');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  const addToFavorites = (id) => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        // Aquí podrías también mostrar un mensaje de éxito al usuario
      } else {
        "Dentista agregado"
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}> {/* Aplica el tema según el contexto */}
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            onAddToFavorites={() => addToFavorites(dentist.id)} // Llama a addToFavorites con el ID del dentista
            link={`/dentist/${dentist.id}`} // Configura el enlace con el ID del dentista
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
