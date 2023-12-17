import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ModalComponent = ({ isOpen, onClose,  jugador }) => {
 
  const fotoCara = require('../../assets/fotoCara.png');
  const urlImagenFondo = require('../../assets/07-Carta-Oro-optimizada-removebg-preview.png');
  if (!isOpen) {
    return null;
  }

 

  return (
    <Modal transparent visible={isOpen} onRequestClose={onClose}>
      <TouchableOpacity
        style={stylesModal.modalOverlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <View style={stylesModal.modalContainer}>
          <Image
            source={urlImagenFondo}
            style={stylesModal.modalImage}
            resizeMode="contain"
          />
          {jugador && (
            <>
              <Image 
                source={fotoCara}
                style={stylesModal.caraImagen}
                resizeMode="contain"
              />
              <View style={stylesModal.textContainer}>
                <Text style={stylesModal.textStyle}>{jugador.nombre}</Text>
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const stylesModal = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    position: "absolute", // Se posiciona de manera absoluta para que el texto pueda ir encima
    resizeMode: "contain",
  },
  modalContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-start', // Alinea los elementos hacia la parte superior
    alignItems: 'center',
    paddingTop: 30, // Ajusta según la cantidad de espacio superior que necesites
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white", // Cambia esto según el color deseado
    fontSize: 24, // Cambia esto según el tamaño deseado
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  caraImagen: {
    width: 200, // Ajusta el tamaño según sea necesario
    height: 140, // Ajusta el tamaño según sea necesario
    marginBottom: 10, // Espacio entre la imagen y el texto
  },
});
export default ModalComponent;
