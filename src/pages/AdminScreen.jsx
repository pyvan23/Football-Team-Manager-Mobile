import React, { useRef, useState } from "react";

import AppBackground from "../components/AppBackground";
import SelectNumberTeam from "../components/SelectNumberTeam";
import PickJugadores from "../components/PickJugadores";
import Icon from "react-native-vector-icons/FontAwesome";
import ViewShot from "react-native-view-shot";

const AdminScreen = () => {
  const [selectedTeamNumber, setSelectedTeamNumber] = useState(5);

  const viewShotRef = useRef();

  const capturarYCompartir = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const options = {
        html: `<img src="${uri}" alt="captura" />`,
        fileName: "captura",
        directory: "Documents",
      };
      const file = await RNHTMLtoPDF.convert(options);
      await Share.open({
        url: `file://${file.filePath}`,
        type: "application/pdf",
        social: Share.Social.WHATSAPP,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBackground>
     
      <Icon
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 30,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
        }}
        name="share-alt"
        size={30}
        color="white"
        onPress={capturarYCompartir}
      />
      <SelectNumberTeam onNumberSelect={setSelectedTeamNumber} />
      <PickJugadores teamSize={selectedTeamNumber} />
     
    </AppBackground>
  );
};

export default AdminScreen;
