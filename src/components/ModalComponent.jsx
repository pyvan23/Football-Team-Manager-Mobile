import React, { useState } from 'react';
import { Modal,View,Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ModalComponent = ({ isOpen, onClose, urlImagenFondo,jugador}) => {

  const [isImageLoaded, setImageLoaded] = useState(false);
  

  if (!isOpen) {
    return null;
  }
  
    // Función para manejar cuando la imagen se carga
    const onImageLoad = () => {
    setTimeout(() => setImageLoaded(true), 1000); // Retrasa por 100 ms (ajusta según sea necesario)
    }; 
   
  

  return (
    <Modal transparent visible={isOpen} onRequestClose={onClose}>
      <TouchableOpacity style={stylesModal.modalOverlay} onPress={onClose} activeOpacity={1}>
     
        <View style={stylesModal.modalContainer}>
        <Image 
         source={urlImagenFondo}
          style={stylesModal.modalImage}
          resizeMode="contain"
          onLoadEnd={onImageLoad} 
        />
          {isOpen && isImageLoaded && jugador && (
  <View style={stylesModal.textContainer}>
    <Text style={stylesModal.textStyle}>{jugador.nombre}</Text>
  </View>
)}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const stylesModal = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Se posiciona de manera absoluta para que el texto pueda ir encima
    resizeMode: 'contain',
  },
  modalContainer: {
    width: '100%', // Ajusta el ancho según sea necesario
    height: '60%', // Ajusta la altura según sea necesario
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white', // Cambia esto según el color deseado
    fontSize: 24, // Cambia esto según el tamaño deseado
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  
});
export default ModalComponent;
