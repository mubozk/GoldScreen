import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-navigation";
export default SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundStyle}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#1b1b1b",
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
});
