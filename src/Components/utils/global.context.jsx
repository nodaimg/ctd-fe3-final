import React, { createContext, useReducer } from "react";

// Definimos el estado inicial
export const initialState = {
  theme: "light",
  data: []
};

// Definimos el contexto global
export const GlobalContext = createContext(initialState);

// Definimos el reducer para manejar las acciones
export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

// Definimos el proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Función para cambiar el tema de la aplicación
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Función para guardar los datos de la API en el contexto
  const setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        toggleTheme,
        setData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

