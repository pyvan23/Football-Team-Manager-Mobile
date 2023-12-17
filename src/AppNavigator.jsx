import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TablaScreen from './pages/TablaScreen';
import AppBackground from './components/AppBackground';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppBackground>
       <TablaScreen/>
      </AppBackground>
    </NavigationContainer>
  );
};

export default AppNavigator;
