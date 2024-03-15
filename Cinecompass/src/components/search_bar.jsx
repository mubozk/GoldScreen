import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors.jsx";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    const { dark_theme } = colors;
  const { backgroundStyle, iconStyle, inputStyle, textInputStyle } = styled(colors.dark_theme);
  return (
    <View style={backgroundStyle}>
      <Feather style={iconStyle} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={textInputStyle}
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
      marginHorizontal: 15,
      color: themePalette.cinecompassYellow,
    },
    inputStyle: {},
    textInputStyle: {
      color: themePalette.text,
      fontSize: 17,
      width: "82%",
      height: "100%",
    },
  });
export default SearchBar;
