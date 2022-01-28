import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";

export default function Step(props) {
  return (
    <View style={styles.container}>
      <View style={styles.stepNum}>
        <Text style={styles.stepNumText}>{props.index + 1}</Text>
      </View>
      <View style={styles.stepDesc}>
        <Text style={styles.stepDescText}>{props.step}</Text>
      </View>
    </View>
  );
}
