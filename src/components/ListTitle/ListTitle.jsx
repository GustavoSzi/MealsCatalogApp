import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function ListTitle(props) {
  return (
    <View style={styles.titleContainer}>
      <Ionicons name={props.icon} size={24} color='black' />
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});
