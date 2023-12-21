import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBackground from '../components/AppBackground';
import Jugadores from '../components/Jugadores';

const TablaScreen = () => {
  const navigation = useNavigation();

  return (
    <AppBackground>
      <Jugadores />
      {/* Botón posicionado absolutamente en la esquina inferior derecha */}
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Admin"
          onPress={() => navigation.navigate('Admin')}
        />
      </View>
    </AppBackground>
  );
};

// Estilos para el botón
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute', // Posición absoluta para el contenedor del botón
    bottom: 20, // Espacio desde la parte inferior
    right: 20, // Espacio desde la parte derecha
  },
});

export default TablaScreen;
