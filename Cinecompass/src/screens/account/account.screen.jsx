import React from "react";
import { ImageBackground, StyleSheet, View, Button } from "react-native";
import NavigationActions from "../../navigation/navigation_actions";

const AccountScreen = () => {
  const { navigatePush } = NavigationActions();
  return (
    <ImageBackground
      source={require("../../../assets/home_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.cover} />
      <View style={styles.container}>
        <Button
          title="Login"
          color="#5A9"
          onPress={() => navigatePush("Login")}
        />
        <View style={styles.spacer} />
        <Button
          title="Register"
          color="#5A9"
          onPress={() => navigatePush("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 16,
    marginTop: 8,
  },
  spacer: {
    height: 26,
  },
});

export default AccountScreen;
