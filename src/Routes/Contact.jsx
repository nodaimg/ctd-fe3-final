import React, { useState, useContext } from 'react';
import Form from '../Components/Form';
import ThemeContext from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    error: '',
    successMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones del formulario
    if (formData.fullName.length <= 5 || !formData.email.includes('@')) {
      setFormData({
        ...formData,
        error: 'Por favor verifique su información nuevamente',
        successMessage: '',
      });
    } else {
      // Datos del formulario enviados correctamente
      console.log('Formulario enviado:', formData);
      setFormData({
        fullName: '',
        email: '',
        error: '',
        successMessage: `Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`,
      });
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {formData.error && <p className="error">{formData.error}</p>}
      {formData.successMessage && <p className="success">{formData.successMessage}</p>}
    </div>
  );
};

export default Contact;
