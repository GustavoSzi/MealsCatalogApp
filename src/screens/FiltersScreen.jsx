import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FiltersScreen() {
  return (
    <View style={styles.container}>
      <Text>Filters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
