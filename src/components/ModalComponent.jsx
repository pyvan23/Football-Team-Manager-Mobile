import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import fotoCara from '../../assets/fotoCara.png'
import urlImagenFondo from '../../assets/07-Carta-Oro-optimizada-removebg-preview.png'
const ModalComponent = ({ isOpen, onClose,  jugador }) => {
 
  
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
    position: "absolute", 
    resizeMode: "contain",
  },
  modalContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 30, 
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white", 
    fontSize: 24, 
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  caraImagen: {
    width: 200, 
    height: 140, 
    marginBottom: 10, 
  },
});
export default ModalComponent;
