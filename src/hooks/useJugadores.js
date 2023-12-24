import { useContext } from "react";
import { JugadoresContext } from "../context/JugadoresContext";


export const useJugadores = () => useContext(JugadoresContext);
