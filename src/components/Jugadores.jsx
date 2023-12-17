import React, { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Modal,
} from "react-native";


//import { useJugadores } from "../hooks/useJugadores";

const Jugadores = () => {
  // const { jugadores } = useJugadores();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedJugador, setSelectedJugador] = useState(null);
  const [cargando, setCargando] = useState(true);

  const jugadores = [
    {
      _id: "656794d2dd94608495446e09",
      nombre: "Agustin",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0c",
      nombre: "Tanga",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0d",
      nombre: "Ivo",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0e",
      nombre: "Chichi",
      puntos: 102,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0b",
      nombre: "Rata",
      puntos: 87,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0a",
      nombre: "Gusta",
      puntos: 84,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0f",
      nombre: "Rulo",
      puntos: 72,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e10",
      nombre: "Chelo",
      puntos: 72,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e11",
      nombre: "Mono",
      puntos: 33,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e12",
      nombre: "Gonza",
      puntos: 24,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e13",
      nombre: "Chori",
      puntos: 21,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e15",
      nombre: "Tomate",
      puntos: 21,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e16",
      nombre: "Ale C",
      puntos: 18,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e17",
      nombre: "Andy",
      puntos: 18,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e18",
      nombre: "Diego Maradona",
      puntos: 15,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e19",
      nombre: "Oliver",
      puntos: 15,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1a",
      nombre: "Goku",
      puntos: 12,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e14",
      nombre: "Diego",
      puntos: 6,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1b",
      nombre: "Richard",
      puntos: 6,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1c",
      nombre: "Romagnoli",
      puntos: 0,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(jugadores.length === 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [jugadores]);

  const openModalWithJugador = jugador => {
    setSelectedJugador(jugador);
    setModalIsOpen(true);
  };

  const jugadoresOrdenados = jugadores;
  const urlImagenFondo = require('../../assets/07-Carta-Oro-optimizada-removebg-preview.png');

  return (
    <>
    <ScrollView style={styles.contenedorTabla}>
      <View style={styles.table}>
        {/* Encabezado de la Tabla */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerItem}>#</Text>
          <Text style={styles.headerItem}>JUGADORES</Text>
          <Text style={styles.headerItem}>PTOS</Text>
          <Text style={styles.headerItem}>ASISTENCIA</Text>
          <Text style={styles.headerItem}>GANADOS</Text>
          <Text style={styles.headerItem}>% EFECT.</Text>
          <Text style={styles.headerItem}>% ASISTENCIA</Text>
        </View>

        {/* Filas de Jugadores */}
        {jugadoresOrdenados.map((jugador, index) => (
          <TouchableOpacity
            key={jugador.id}
            style={styles.jugadorFila}
            onPress={() => openModalWithJugador(jugador)}
          >
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{jugador.nombre}</Text>
            <Text style={styles.cell}>{jugador.puntos}</Text>
            <Text style={styles.cell}>{jugador.asistencias}</Text>
            <Text style={styles.cell}>{jugador.ganados}</Text>
            <Text style={styles.cell}>{"0"}</Text>
            <Text style={styles.cell}>{"0"}</Text>
          
        
          </TouchableOpacity>
          
        ))}
      </View>
    </ScrollView>
    <ModalComponent
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        jugador={selectedJugador}
        urlImagenFondo={urlImagenFondo}
        styles={styles}
      />
    </>
  );
};

const styles = StyleSheet.create({
  jugadorFila: {
    padding: 1,
   flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  
  },
 
  contenedorTabla: {
    padding: 45,
    
  },
  table: {
    width: "100%", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 20, // Solo Android
   borderRightColor: "#ddd",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
   
    
    
  },
  tableHeader: {
    flexDirection: "row",
    borderRadius:20,  
    
    
  
  },
  headerItem: {
   
    flex: 1,
    backgroundColor: '#68ca6c',
    color:'#300',

  
   
    
  },
  
  cell: {
    flex: 1,
    // Estilos para las celdas de la tabla
  },
});

export default Jugadores;
