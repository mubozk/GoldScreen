import React, { useState, useContext } from "react";
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { AuthenticationContext } from "../../contexts/authentication.context";
import NavigationActions from "../../navigation/navigation_actions";

const RegisterScreen = () => {
  const { navigatePop } = NavigationActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <ImageBackground
      source={require("../../../assets/home_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.cover} />
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <View style={styles.spacer} />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <View style={styles.spacer} />
        <TextInput
          style={styles.input}
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{error}</Text>
          </View>
        )}
        <View style={styles.spacer} />
        {!isLoading ? (
          <Button
            title="Register"
            color="#5A9"
            onPress={() => onRegister(email, password, repeatedPassword)}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <View style={styles.spacer} />
        <Button title="Back" color="#5A9" onPress={() => navigatePop()} />
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
    padding: 16,
    marginTop: 8,
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
    marginBottom: 10,
  },
  spacer: {
    height: 16,
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
});

export default RegisterScreen;
