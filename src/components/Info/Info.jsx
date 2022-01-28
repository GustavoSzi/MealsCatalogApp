import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function Info(props) {
  function priceFormat(price) {
    switch (price) {
      case "affordable":
        return "$";
      case "pricey":
        return "$$$";
      case "luxurious":
        return "$$$$$";
    }
  }

  return (
    <View style={styles.info}>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>Duration: {props.duration} minutes</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>Difficulty: {props.difficulty}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>Cost: {priceFormat(props.price)}</Text>
      </View>
    </View>
  );
}
