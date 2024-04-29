import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useAppHooks from "../hooks/app.hooks";

const ThemeSwitchButton = () => {
  const { themePalette, toggleTheme, themeToggleIcon } = useAppHooks();

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
      <Ionicons
        name={themeToggleIcon}
        size={24}
        color={themePalette.cinecompassYellow}
      />
    </TouchableOpacity>
  );
};

export default ThemeSwitchButton;
