import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/:id${id}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch dentist');
        }
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {dentist && (
        <div className={theme === 'dark' ? 'dark' : 'light'}>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
