import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
} from "react-native";
import { useJugadores } from "../hooks/useJugadores";
import { Picker } from "@react-native-picker/picker";

const JugadorDropdown = ({ label, jugadores, onSelect }) => {
  const [selectedJugador, setSelectedJugador] = useState("");

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <Picker
        selectedValue={selectedJugador}
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedJugador(itemValue);
          onSelect(itemValue);
        }}
      >
        <Picker.Item label="Selecciona jugador" value="" />
        {jugadores.map((jugador) => (
          <Picker.Item key={jugador._id} label={jugador.nombre} value={jugador.nombre} />
        ))}
      </Picker>
    </View>
  );
};

const PickJugadores = () => {
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);
  const { jugadores } = useJugadores();

  const agregarJugadorEquipo = (jugador, equipo) => {
    if (equipo === "blanco" && !equipoBlanco.includes(jugador)) {
      setEquipoBlanco([...equipoBlanco, jugador]);
    } else if (equipo === "negro" && !equipoNegro.includes(jugador)) {
      setEquipoNegro([...equipoNegro, jugador]);
    }
  };
  const eliminarJugadorEquipo = (jugador, equipo) => {
    if (equipo === "blanco") {
      setEquipoBlanco(equipoBlanco.filter((item) => item !== jugador));
    } else if (equipo === "negro") {
      setEquipoNegro(equipoNegro.filter((item) => item !== jugador));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickersContainer}>
        <View style={styles.pickerContainer}>
          <Text style={styles.equipoTitle}>Equipo Blanco</Text>
          <JugadorDropdown
            jugadores={jugadores}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "blanco")}
          />
          <View style={styles.lista}>
            {equipoBlanco.map((jugador, index) => (
              <Text key={index} style={styles.jugadorItem}>
                {jugador}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.equipoTitle}>Equipo Negro</Text>
          <JugadorDropdown
            jugadores={jugadores}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "negro")}
          />
          <View style={styles.lista}>
            {equipoNegro.map((jugador, index) => (
              <Text key={index} style={styles.jugadorItem}>
                {jugador}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    padding: 5,
  }, pickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center", // Asegura que el contenedor del modal esté centrado verticalmente
    alignItems: "center", // Asegura que el contenedor del modal esté centrado horizontalmente
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente para oscurecer el fondo
  },
  container: {
    flex: 1,
    padding: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
   
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdownButton: {
    marginTop: 1,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  modalView: {
    margin: 20, // Agrega un margen alrededor del modal
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%", // Ancho del modal como porcentaje de la pantalla
    maxWidth: 300, // Ancho máximo del modal para tablets y dispositivos grandes
  },
  itemTouchable: {
    paddingVertical: 15, // Aumentar el padding vertical para dar más espacio
    paddingHorizontal: 20, // Aumentar el padding horizontal para que se vea más amplio
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%", // Asegurarse de que el toque sea de ancho completo
  },
  itemText: {
    fontSize: 18, // Aumentar el tamaño de la fuente para que los nombres sean más legibles
    color: "#333",
  },
 
  cancelButton: {
    marginTop: 20,
    backgroundColor: "#ff6347",
    padding: 12, // Aumentar el padding para un botón más grande
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 18, // Aumentar el tamaño de la fuente del botón de cancelar
    color: "#fff",
  },
  equipoHeader: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Centra verticalmente
    marginBottom: 10,
  },
  equipoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10, // Espacio entre el círculo y el texto
    color: "white",
  },
  teamCircle: {
    width: 20, // Diámetro del círculo
    height: 20, // Diámetro del círculo
    borderRadius: 10, // Redondea las esquinas para formar un círculo
  },
  whiteCircle: {
    backgroundColor: "white", // Círculo blanco
  },
  blackCircle: {
    backgroundColor: "black", // Círculo negro
  },
  jugadorItem: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  pickerStyle: {
    height: 50,
    width: '100%',
    color: '#555',
    backgroundColor:'white' // color del texto dentro del picker
  },
});

export default PickJugadores;
