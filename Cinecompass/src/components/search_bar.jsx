import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../constants/config.jsx";
export default SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search your favorite movies now!"
        placeholderTextColor={COLORS.tertiary}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: COLORS.secondary,
    marginTop: 30,
    marginHorizontal: 15,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 10,
    color: COLORS.cinecompassYellow,
  },
  inputStyle: {
    alignSelf: "center",
    fontSize: 17,
    marginHorizontal: 15,
    color: "white",
  },
});
