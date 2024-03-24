import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import useAppHooks from "../hooks/app.hooks";

const LoadingView = () => {
  const { themePalette } = useAppHooks();
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={themePalette.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default LoadingView;
