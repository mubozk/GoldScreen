import React, { useState, useContext } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { AuthenticationContext } from "../../contexts/authentication.context";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <ImageBackground
      source={require("../../../assets/home_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.cover} />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <View style={styles.spacer} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{error}</Text>
          </View>
        )}
        <View style={styles.spacer} />
        {!isLoading ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onLogin(email, password)}
          >
            <FontAwesome5 name="sign-in-alt" size={20} color="white" />
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="arrow-left" size={20} color="white" />
          <Text style={styles.buttonText}>Back</Text>
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
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  spacer: {
    height: 20,
  },
  errorContainer: {
    maxWidth: 300,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  error: {
    color: "red",
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
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
});

export default LoginScreen;
