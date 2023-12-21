import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, FlatList, Button } from 'react-native';

const JugadorDropdown = ({ label, jugadores, onSelect }) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>{label}</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.dropdownButtonText}>Selecciona jugador</Text>
        </TouchableOpacity>
  
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <FlatList
                data={jugadores}
                keyExtractor={(item) => item._id.toString()}
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
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
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
      <View style={styles.equipoHeader}>
        <View style={[styles.teamCircle, styles.whiteCircle]} />
        <Text style={styles.equipoTitle}>Equipo Blanco</Text>
      </View>
      <JugadorDropdown
       
        jugadores={jugadores}
        onSelect={(jugador) => agregarJugadorEquipo(jugador, 'blanco')}
      />
      <View style={styles.lista}>
        {equipoBlanco.map((jugador, index) => (
          <Text key={index}>{index + 1} - {jugador}</Text>
        ))}
      </View>

      <View style={styles.equipoHeader}>
        <View style={[styles.teamCircle, styles.blackCircle]} />
        <Text style={styles.equipoTitle}>Equipo Negro</Text>
      </View>
      <JugadorDropdown
        jugadores={jugadores}
        onSelect={(jugador) => agregarJugadorEquipo(jugador, 'negro')}
      />
      <View style={styles.lista}>
        {equipoNegro.map((jugador, index) => (
          <Text key={index}>{index + 1} - {jugador}</Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center', // Asegura que el contenedor del modal esté centrado verticalmente
        alignItems: 'center', // Asegura que el contenedor del modal esté centrado horizontalmente
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para oscurecer el fondo
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
    fontWeight: 'bold',
    
  },
  dropdownButton: {
    marginTop: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  modalView: {
    margin: 20, // Agrega un margen alrededor del modal
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
    width: '80%', // Ancho del modal como porcentaje de la pantalla
    maxWidth: 300, // Ancho máximo del modal para tablets y dispositivos grandes
  },
  itemTouchable: {
    paddingVertical: 15, // Aumentar el padding vertical para dar más espacio
    paddingHorizontal: 20, // Aumentar el padding horizontal para que se vea más amplio
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', // Asegurarse de que el toque sea de ancho completo
  },
  itemText: {
    fontSize: 18, // Aumentar el tamaño de la fuente para que los nombres sean más legibles
    color: '#333',
  },
  lista: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  cancelButton: {
    marginTop: 20,
    backgroundColor: '#ff6347',
    padding: 12, // Aumentar el padding para un botón más grande
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 18, // Aumentar el tamaño de la fuente del botón de cancelar
    color: '#fff',
  },
  equipoHeader: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Centra verticalmente
    marginBottom: 10,
  },
  equipoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Espacio entre el círculo y el texto
    color: 'white',
  },
  teamCircle: {
    width: 20, // Diámetro del círculo
    height: 20, // Diámetro del círculo
    borderRadius: 10, // Redondea las esquinas para formar un círculo
  },
  whiteCircle: {
    backgroundColor: 'white', // Círculo blanco
  },
  blackCircle: {
    backgroundColor: 'black', // Círculo negro
  },
});

export default PickJugadores;
