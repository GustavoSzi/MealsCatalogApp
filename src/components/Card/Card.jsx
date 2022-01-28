import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Card(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.card, backgroundColor: props.item.color }}
      onPress={() => {}}
      activeOpacity={0.8}
    >
      <View>
        <Text>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
