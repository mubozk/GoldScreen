import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default ResultsList = ({ title, results }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.title}>{title}</Text>
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
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
