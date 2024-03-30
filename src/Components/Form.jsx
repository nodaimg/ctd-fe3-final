import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    error: "",
    successMessage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones del formulario
    if (formData.fullName.length <= 5 || !formData.email.includes("@")) {
      setFormData({
        ...formData,
        error: "Por favor verifique su información nuevamente",
        successMessage: ""
      });
    } else {
      // Datos del formulario enviados correctamente
      console.log("Formulario enviado:", formData);
      setFormData({
        fullName: "",
        email: "",
        error: "",
        successMessage: `Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {formData.error && <p className="error">{formData.error}</p>}
      {formData.successMessage && (
        <p className="success">{formData.successMessage}</p>
      )}
    </div>
  );
};

export default Form;
