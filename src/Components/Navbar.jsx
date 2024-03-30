import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={theme === 'dark' ? 'dark' : 'light'}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      {/* Botón para cambiar de tema */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
