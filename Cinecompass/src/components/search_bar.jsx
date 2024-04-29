import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import useAppHooks from "../hooks/app.hooks.jsx";
const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  const { themePalette } = useAppHooks();
  const { backgroundStyle, iconStyle, inputStyle, textInputStyle } =
    styled(themePalette);
  return (
    <View style={backgroundStyle}>
      <TouchableOpacity style={iconStyle} onPress={onFavouritesToggle}>
        <AntDesign
          name={isFavouritesToggled ? "heart" : "hearto"}
          size={25}
          color={isFavouritesToggled ? themePalette.cinecompassYellow : "black"}
        />
      </TouchableOpacity>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={textInputStyle}
        placeholder="Search your favorite movies now!"
        placeholderTextColor={themePalette.tertiary}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <Feather style={iconStyle} name="search" size={30} />
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
      fontSize: 25,
      color: themePalette.cinecompassYellow,
      paddingHorizontal: 5,
    },
    iconContainerStyle: {
      alignSelf: "center",
    },
    textInputStyle: {
      color: themePalette.text,
      fontSize: 17,
      width: "75%",
      height: "100%",
    },
  });
export default SearchBar;
