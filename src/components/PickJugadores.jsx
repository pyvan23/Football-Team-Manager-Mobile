import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickJugadores = ({ jugadores }) => {
  const [selectedJugadorBlanco, setSelectedJugadorBlanco] = useState();
  const [selectedJugadorNegro, setSelectedJugadorNegro] = useState();
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);

  // Establece el jugador actualmente seleccionado en el Picker sin agregarlo a la lista
  const onSelectJugadorBlanco = (jugador) => {
    setSelectedJugadorBlanco(jugador);
  };

  const onSelectJugadorNegro = (jugador) => {
    setSelectedJugadorNegro(jugador);
  };

  // Agrega el jugador seleccionado a la lista del equipo correspondiente cuando se presiona el área de texto
  const onAddJugadorBlanco = () => {
    if (!equipoBlanco.includes(selectedJugadorBlanco)) {
      setEquipoBlanco([...equipoBlanco, selectedJugadorBlanco]);
    }
  };

  const onAddJugadorNegro = () => {
    if (!equipoNegro.includes(selectedJugadorNegro)) {
      setEquipoNegro([...equipoNegro, selectedJugadorNegro]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pickerTitle}>Equipo Blanco</Text>
      <Picker
        selectedValue={selectedJugadorBlanco}
        onValueChange={(itemValue) => onSelectJugadorBlanco(itemValue)}
        style={styles.picker}
      >
        {jugadores.map((jugador) => (
          <Picker.Item key={jugador._id + 'b'} label={jugador.nombre} value={jugador.nombre} />
        ))}
      </Picker>
      {selectedJugadorBlanco && (
        <TouchableOpacity style={styles.addButton} onPress={onAddJugadorBlanco}>
          <Text>Agregar a Blanco</Text>
        </TouchableOpacity>
      )}
      {equipoBlanco.map((jugador, index) => (
        <Text key={'blanco_' + index} style={styles.listItem}>{jugador}</Text>
      ))}

      <Text style={styles.pickerTitle}>Equipo Negro</Text>
      <Picker
        selectedValue={selectedJugadorNegro}
        onValueChange={(itemValue) => onSelectJugadorNegro(itemValue)}
        style={styles.picker}
      >
        {jugadores.map((jugador) => (
          <Picker.Item key={jugador._id + 'n'} label={jugador.nombre} value={jugador.nombre} />
        ))}
      </Picker>
      {selectedJugadorNegro && (
        <TouchableOpacity style={styles.addButton} onPress={onAddJugadorNegro}>
          <Text>Agregar a Negro</Text>
        </TouchableOpacity>
      )}
      {equipoNegro.map((jugador, index) => (
        <Text key={'negro_' + index} style={styles.listItem}>{jugador}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  picker: {
    width: '100%',
    height: 150,
  },
  pickerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PickJugadores;
