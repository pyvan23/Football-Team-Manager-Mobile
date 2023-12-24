import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TablaScreen from './pages/TablaScreen';
import AdminScreen from './pages/AdminScreen';
import { JugadoresProvider } from './context/JugadoresContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <JugadoresProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabla" 
          component={TablaScreen} 
          options={{ title: 'Tabla' }}
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminScreen} 
          options={{ title: 'Admin' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </JugadoresProvider>
  );
};

export default AppNavigator;
