import React, { useContext } from 'react';
import Card from '../Components/Card';
import ThemeContext from '../contexts/ThemeContext';

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Al cargar la página, obtener los dentistas favoritos del localStorage
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      setFavoriteDentists(JSON.parse(favoritesFromStorage));
    }
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={theme === 'dark' ? 'dark card-grid' : 'light card-grid'}>
        {/* Renderizar una Card por cada dentista destacado */}
        {favorites.map((id) => (
          // Aquí podrías hacer una llamada a una API para obtener los detalles completos del dentista si fuera necesario
          <Card
            key={id}
            name={`Dentist ${id}`} // Puedes ajustar esto según tus datos reales
            username={`username${id}`} // Puedes ajustar esto según tus datos reales
            link={`/dentist/${id}`}
            // Puedes agregar más propiedades si las necesitas, como imagen, descripción, etc.
          />
        ))}
      </div>
    </>
  );
};

export default Favs;

