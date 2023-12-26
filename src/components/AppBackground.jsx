import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const AppBackground = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://i0.wp.com/aldiaargentina.microjuris.com/wp-content/uploads/2023/01/futbol.jpg?fit=849%2C569&ssl=1",
      }}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default AppBackground;
