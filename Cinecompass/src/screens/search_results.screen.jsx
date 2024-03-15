import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
const SearchResultsScreen = ({results}) => {
  const { textStyle } = styled(colors.dark_theme);
  const friends = [
    { name: "Movie#1", rating: 1 },
    { name: "Movie#2", rating: 2 },
    { name: "Movie#3", rating: 3 },
    { name: "Movie#4", rating: 4 },
    { name: "Movie#5", rating: 5 },
    { name: "Movie#6", rating: 6 },
    { name: "Movie#7", rating: 7 },
    { name: "Movie#8", rating: 8 },
    { name: "Movie#9", rating: 9 },
  ];

  return (
    <>
      <ResultsList title={"results"} results={results} />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={textStyle}>
              {item.name} - {item.age}
            </Text>
          );
        }}
      />
    </>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    textStyle: {
      marginVertical: 50,
    },
  });

export default SearchResultsScreen;
