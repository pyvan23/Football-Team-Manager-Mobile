import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TablaScreen from './pages/TablaScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <TablaScreen/>
    </NavigationContainer>
  );
};

export default AppNavigator;
