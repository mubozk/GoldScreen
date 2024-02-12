import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
const SearchResultsScreen = () => {
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
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default SearchResultsScreen;
