import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppBackground from "../components/AppBackground";
import PickJugadores from "../components/PickJugadores";
import SelectNumberTeam from "../components/SelectNumberTeam";




const AdminScreen = () => {
  const navigation = useNavigation();
  return (
    <AppBackground>
     <SelectNumberTeam />
      <PickJugadores />
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></View>
    </AppBackground>
  );
};

export default AdminScreen;
