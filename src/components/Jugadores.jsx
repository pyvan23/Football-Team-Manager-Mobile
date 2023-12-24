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
import { useJugadores } from "../hooks/useJugadores";

//import { useJugadores } from "../hooks/useJugadores";

const Jugadores = () => {
  const { jugadores } = useJugadores();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedJugador, setSelectedJugador] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(jugadores.length === 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [jugadores]);

  const openModalWithJugador = (jugador) => {
    setSelectedJugador(jugador);
    setModalIsOpen(true);
  };

  const jugadoresOrdenados = jugadores;

  console.log(jugadoresOrdenados);
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
              key={jugador._id}
              style={styles.jugadorFila}
              onPress={() => openModalWithJugador(jugador)}
            >
              <Text style={styles.cell}>{index + 1}</Text>
              <Text style={[styles.cell, styles.nombreCell]}>
                {jugador.nombre}
              </Text>
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
        styles={styles}
      />
    </>
  );
};

const styles = StyleSheet.create({
  jugadorFila: {
    flexDirection: "row",
    paddingVertical: 10, // Espacio vertical para cada fila
    paddingHorizontal: 5, // Espacio horizontal para cada fila
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo ligeramente transparente
    borderRadius: 10, // Bordes redondeados
    marginVertical: 2, // Espacio entre filas
  },

  contenedorTabla: {
    padding: 20, // Ajuste del padding general
  },
  table: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10, // Sombra para Android

    borderRadius: 15, // Bordes redondeados para la tabla
    overflow: "hidden", // Asegura que el contenido no se salga del borde redondeado
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#4a8af4", // Color del encabezado
    padding: 2, // Espacio interno del encabezado
    borderTopLeftRadius: 15, // Redondeo del borde superior izquierdo
    borderTopRightRadius: 15, // Redondeo del borde superior derecho
  },
  headerItem: {
    flex: 1,
    color: "white", // Texto blanco para el encabezado
    fontWeight: "bold", // Texto en negrita
    textAlign: "center", // Alineación del texto
  },

  cell: {
    flex: 1,
    textAlign: "center",
    // Ajustes adicionales para manejar textos largos
    overflow: "hidden", // Ocultar el texto que se sale del contenedor
    textOverflow: "ellipsis", // Añadir elipsis si el texto se corta
  },
  nombreCell: {
    flex: 1, // Dar más espacio a la celda del nombre
    textAlign: "left", // Alineación a la izquierda para los nombres
    paddingLeft: 10, // Espacio a la izquierda para evitar que el texto pegue al borde
    fontSize: 12, // Ajustar el tamaño de la fuente para nombres largos
  },
});

export default Jugadores;
