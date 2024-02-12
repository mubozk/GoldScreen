import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../constants/colors";

const ResultsList = ({ title, results }) => {
  const { titleStyle } = styled(colors.dark_theme);
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
const styled = (themePalette) =>
  StyleSheet.create({
    titleStyle: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
export default ResultsList;
