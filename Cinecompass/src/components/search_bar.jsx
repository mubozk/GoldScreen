import React from "react";
import { TouchableOpacity, StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import useAppHooks from "../hooks/app.hooks";

const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  const { themePalette } = useAppHooks();
  const {
    backgroundStyle,
    iconStyle,
    inputStyle,
    clearIconStyle,
    textInputStyle,
  } = styled(themePalette);

  return (
    <View style={backgroundStyle}>
      <TouchableOpacity style={iconStyle} onPress={onFavouritesToggle}>
        <AntDesign
          name={isFavouritesToggled ? "heart" : "hearto"}
          size={20}
          color={isFavouritesToggled ? themePalette.cinecompassYellow : "grey"}
        />
      </TouchableOpacity>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={textInputStyle}
        placeholder="Search your favorite movies now!"
        placeholderTextColor="grey"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <TouchableOpacity style={clearIconStyle} onPress={() => onTermChange("")}>
        <Feather name="x" size={20} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity style={iconStyle} onPress={onTermSubmit}>
        <Feather name="search" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: themePalette.secondary,
      marginHorizontal: 15,
      borderRadius: 5,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      marginTop: 50,
    },
    iconStyle: {
      marginHorizontal: 5,
    },
    clearIconStyle: {
      marginLeft: "auto",
      marginRight: 10,
    },
    textInputStyle: {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      color: themePalette.text,
      fontSize: 17,
    },
  });

export default SearchBar;
