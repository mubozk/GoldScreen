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


export default GlobalLoading;
