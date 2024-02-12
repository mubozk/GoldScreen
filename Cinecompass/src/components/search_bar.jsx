import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors.jsx";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const { backgroundStyle, iconStyle, inputStyle } = styled(colors.dark_theme);
  const { dark_theme } = colors;
  return (
    <View style={backgroundStyle}>
      <Feather style={iconStyle} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={inputStyle}
        placeholder="Search your favorite movies now!"
        placeholderTextColor={dark_theme.tertiary}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: themePalette.secondary,
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
      color: themePalette.cinecompassYellow,
    },
    inputStyle: {
      alignSelf: "center",
      fontSize: 17,
      marginHorizontal: 15,
      color: "white",
    },
  });
export default SearchBar;
