import React, { useState } from "react";
import { Alert, View, StyleSheet, Text } from "react-native";
import { useJugadores } from "../hooks/useJugadores";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";

const JugadorItem = ({ jugador, onRemove, indice }) => (
  <View style={styles.jugadorItemContainer}>
    <Text style={styles.jugadorItemText}>{`${indice + 1} - ${jugador}`}</Text>
    <Text style={styles.jugadorItemCancel} onPress={() => onRemove(jugador)}>
      X
    </Text>
  </View>
);

const JugadorDropdown = ({ label, jugadores, onSelect }) => {
  const [selectedJugador, setSelectedJugador] = useState("");

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <Picker
        selectedValue={selectedJugador}
        style={styles.pickerStyle}
        onValueChange={(itemValue) => {
          setSelectedJugador(itemValue);
          onSelect(itemValue);
        }}
      >
        <Picker.Item label="Selecciona jugador" value="" />
        {jugadores.map((jugador) => (
          <Picker.Item
            key={jugador._id}
            label={jugador.nombre}
            value={jugador.nombre}
          />
        ))}
      </Picker>
    </View>
  );
};

const PickJugadores = ({ teamSize }) => {
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);
  const [jugadoresSeleccionados, setJugadoresSeleccionados] = useState([]);

  const { jugadores } = useJugadores();

  const agregarJugadorEquipo = (jugador, equipo) => {
    if (equipo === "blanco") {
      if (equipoBlanco.length >= teamSize) {
        Alert.alert(
          "Limite Alcanzado",
          `No puedes agregar más de ${teamSize} jugadores al Equipo Blanco.`
        );
      } else if (!jugadoresSeleccionados.includes(jugador)) {
        setEquipoBlanco((prev) => [...prev, jugador]);
        setJugadoresSeleccionados((prev) => [...prev, jugador]);
      }
    } else if (equipo === "negro") {
      if (equipoNegro.length >= teamSize) {
        Alert.alert(
          "Limite Alcanzado",
          `No puedes agregar más de ${teamSize} jugadores al Equipo Negro.`
        );
      } else if (!jugadoresSeleccionados.includes(jugador)) {
        setEquipoNegro((prev) => [...prev, jugador]);
        setJugadoresSeleccionados((prev) => [...prev, jugador]);
      }
    }
  };

  const eliminarJugadorEquipo = (jugador, equipo) => {
    if (equipo === "blanco") {
      setEquipoBlanco((prev) => prev.filter((item) => item !== jugador));
    } else if (equipo === "negro") {
      setEquipoNegro((prev) => prev.filter((item) => item !== jugador));
    }
    setJugadoresSeleccionados((prev) =>
      prev.filter((item) => item !== jugador)
    );
  };
  const sonEquiposCompletos =
    equipoBlanco.length === teamSize && equipoNegro.length === teamSize;
  return (
    <View style={styles.container}>
      
      <View style={styles.pickersContainer}>
        
        <View style={styles.pickerContainer}>
         
          <JugadorDropdown
            label="Equipo Blanco"
            jugadores={jugadores.filter(
              (jugador) => !jugadoresSeleccionados.includes(jugador.nombre)
            )}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "blanco")}
          />
          {equipoBlanco.map((jugador, index) => (
            <JugadorItem
              key={index}
              indice={index}
              jugador={jugador}
              onRemove={(jugador) => eliminarJugadorEquipo(jugador, "blanco")}
            />
          ))}
        </View>

        <View style={styles.pickerContainer}>
          <JugadorDropdown
            label="Equipo Negro"
            jugadores={jugadores.filter(
              (jugador) => !jugadoresSeleccionados.includes(jugador.nombre)
            )}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "negro")}
          />
          {equipoNegro.map((jugador, index) => (
            <JugadorItem
              key={index}
              indice={index}
              jugador={jugador}
              onRemove={(jugador) => eliminarJugadorEquipo(jugador, "negro")}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 0,
  },
  pickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerContainer: {
    flex: 1,
    padding: 5,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerStyle: {
    height: 50,
    width: "100%",
    color: "#555",
    backgroundColor: "white",
  },
  jugadorItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});

export default PickJugadores;
