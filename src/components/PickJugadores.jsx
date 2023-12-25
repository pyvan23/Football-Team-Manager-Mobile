import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useJugadores } from "../hooks/useJugadores";
import { Picker } from '@react-native-picker/picker';

const JugadorItem = ({ jugador, onRemove, indice }) => (
  <Text style={styles.jugadorItem} onPress={() => onRemove(jugador)}>
    {`${indice + 1} - ${jugador}`}
  </Text>
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
      setEquipoBlanco((prev) => [...prev, jugador]);
    } else if (equipo === "negro" && !equipoNegro.includes(jugador)) {
      setEquipoNegro((prev) => [...prev, jugador]);
    }
  };

  const eliminarJugadorEquipo = (jugador, equipo) => {
    if (equipo === "blanco") {
      setEquipoBlanco((prev) => prev.filter((item) => item !== jugador));
    } else if (equipo === "negro") {
      setEquipoNegro((prev) => prev.filter((item) => item !== jugador));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickersContainer}>
        <View style={styles.pickerContainer}>
          <JugadorDropdown
            label="Equipo Blanco"
            jugadores={jugadores}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "blanco")}
          />
          {equipoBlanco.map((jugador, index) => (
            <JugadorItem key={index} indice={index} jugador={jugador} onRemove={(jugador) => eliminarJugadorEquipo(jugador, "blanco")} />
          ))}
        </View>

        <View style={styles.pickerContainer}>
          <JugadorDropdown
            label="Equipo Negro"
            jugadores={jugadores}
            onSelect={(jugador) => agregarJugadorEquipo(jugador, "negro")}
          />
          {equipoNegro.map((jugador, index) => (
              <JugadorItem key={index} indice={index} jugador={jugador} onRemove={(jugador) => eliminarJugadorEquipo(jugador, "negro")} />
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
  },
  pickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '100%',
    color: '#555',
    backgroundColor: 'white',
  },
  jugadorItem: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PickJugadores;
