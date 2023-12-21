
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBackground from '../components/AppBackground';
import PickJugadores from '../components/PickJugadores';


const AdminScreen = () => {
  const jugadores = [
    {
      _id: "656794d2dd94608495446e09",
      nombre: "Agustin",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0c",
      nombre: "Tanga",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0d",
      nombre: "Ivo",
      puntos: 105,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0e",
      nombre: "Chichi",
      puntos: 102,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0b",
      nombre: "Rata",
      puntos: 87,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0a",
      nombre: "Gusta",
      puntos: 84,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e0f",
      nombre: "Rulo",
      puntos: 72,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e10",
      nombre: "Chelo",
      puntos: 72,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e11",
      nombre: "Mono",
      puntos: 33,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e12",
      nombre: "Gonza",
      puntos: 24,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e13",
      nombre: "Chori",
      puntos: 21,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e15",
      nombre: "Tomate",
      puntos: 21,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e16",
      nombre: "Ale C",
      puntos: 18,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e17",
      nombre: "Andy",
      puntos: 18,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e18",
      nombre: "Diego Maradona",
      puntos: 15,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e19",
      nombre: "Oliver",
      puntos: 15,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1a",
      nombre: "Goku",
      puntos: 12,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e14",
      nombre: "Diego",
      puntos: 6,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1b",
      nombre: "Richard",
      puntos: 6,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
    {
      _id: "656794d2dd94608495446e1c",
      nombre: "Romagnoli",
      puntos: 0,
      asistencias: 0,
      ganados: 0,
      efectividad: 0,
      porcentajeAsistencia: 0,
      gano: false,
    },
  ];


    const navigation = useNavigation();
    return (
        <AppBackground>
           <PickJugadores jugadores={jugadores}/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
         
          </View>
        </AppBackground>
      );
};

export default AdminScreen;