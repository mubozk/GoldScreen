import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import useAppHooks from "./src/hooks/app.hooks";
import LoadingView from "./src/components/loading_view";

const GlobalLoading = () => {
  const { isLoading } = useAppHooks();

  if (!isLoading) {
    return null;
  }

  return <LoadingView />;
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
});

export default GlobalLoading;
