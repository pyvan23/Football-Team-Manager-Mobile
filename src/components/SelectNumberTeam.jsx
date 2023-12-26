import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const SelectNumberTeam = ({ onNumberSelect }) => {
  const [selectedNumber, setSelectedNumber] = useState(5); // Iniciamos con un valor por defecto
  const [isPickerVisible, setIsPickerVisible] = useState(true);

  const handleValueChange = (itemValue) => {
    setSelectedNumber(itemValue);
    onNumberSelect(itemValue); // Aquí se llama al callback con el nuevo valor
    setIsPickerVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isPickerVisible ? (
        <Picker
          selectedValue={selectedNumber}
          onValueChange={handleValueChange}
          style={{ height: 50, width: 150 ,backgroundColor:'white'}}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="7" value={7} />
          <Picker.Item label="9" value={9} />
          <Picker.Item label="11" value={11} />
        </Picker>
      ) : (
        <View>
          <Text style={{color:'white'}}>Equipos de {selectedNumber} jugadores</Text>
          <Button title="Seleccionar otro número" onPress={() => setIsPickerVisible(true)} />
        </View>
      )}
   
    </View>
    
  );
};


export default SelectNumberTeam;
