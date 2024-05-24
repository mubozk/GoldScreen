import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigatePush("Login")}
        >
          <FontAwesome5 name="sign-in-alt" size={20} color="white" />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigatePush("Register")}
        >
          <FontAwesome5 name="user-plus" size={20} color="white" />
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5A9",
    padding: 15,
    borderRadius: 5,
    width: 200,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  spacer: {
    height: 20,
  },
});

export default AccountScreen;
