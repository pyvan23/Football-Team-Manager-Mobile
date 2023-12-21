import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, FlatList, Button } from 'react-native';

const JugadorDropdown = ({ label, jugadores, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
        <Text>Selecciona jugador</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <FlatList
            data={jugadores}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemTouchable}
                onPress={() => {
                  onSelect(item.nombre);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.itemText}>{item.nombre}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const PickJugadores = ({ jugadores }) => {
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);

  const agregarJugadorEquipo = (jugador, equipo) => {
    if (equipo === 'blanco' && !equipoBlanco.includes(jugador)) {
      setEquipoBlanco([...equipoBlanco, jugador]);
    } else if (equipo === 'negro' && !equipoNegro.includes(jugador)) {
      setEquipoNegro([...equipoNegro, jugador]);
    }
  };

  return (
    <View style={styles.container}>
      <JugadorDropdown
        label="Equipo Blanco"
        jugadores={jugadores}
        onSelect={(jugador) => agregarJugadorEquipo(jugador, 'blanco')}
      />
      <View style={styles.lista}>
        {equipoBlanco.map((jugador, index) => (
          <Text key={index}>{jugador}</Text>
        ))}
      </View>

      <JugadorDropdown
        label="Equipo Negro"
        jugadores={jugadores}
        onSelect={(jugador) => agregarJugadorEquipo(jugador, 'negro')}
      />
      <View style={styles.lista}>
        {equipoNegro.map((jugador, index) => (
          <Text key={index}>{jugador}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownButton: {
    marginTop: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTouchable: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  lista: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default PickJugadores;
