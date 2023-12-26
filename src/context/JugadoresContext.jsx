import { createContext, useState,  useEffect } from "react";

export const JugadoresContext = createContext();

export const JugadoresProvider = ({ children }) => {

  const [jugadores, setJugadores] = useState([]);
  const [debeActualizar, setDebeActualizar] = useState(false);
  
  

 /* IMOPRTANTE!!!!!!!!!!Aquí, 10.0.2.2:8080 se traduce a localhost:8080 en tu máquina 
  anfitriona. Entonces, cuando el emulador Android ve una solicitud destinada a 
  10.0.2.2, la redirige a localhost en la computadora que está ejecutando el emulador.
  // Efecto para recuperar jugadores del servidor al montar el componente*/
  useEffect(() => {
    const cargarJugadores = async () => {
      try {
        const response = await fetch("http://10.0.2.2:8080/api/players");
        console.log(response);
        if (!response.ok) {
          throw new Error('Error al cargar los jugadores');
        }
        const data = await response.json();
        setJugadores(data);
      } catch (error) {
        console.error("Error al cargar los jugadores:", error);
      }
    };

    cargarJugadores();
  }, []);
  console.log(jugadores);
  return (
    <JugadoresContext.Provider value={{ jugadores }}>
      {children}
    </JugadoresContext.Provider>
  );
};
