import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function IngredientItem(props) {
  const [check, setCheck] = React.useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCheck(!check);
      }}
    >
      <View style={styles.container}>
        <Ionicons name='caret-forward' size={24} color='black' />
        <Text
          style={{
            ...styles.item,
            textDecorationLine: check ? "line-through" : "none",
          }}
        >
          {props.ingredient}
        </Text>
        {check && <Ionicons name='checkmark' size={24} color='black' />}
      </View>
    </TouchableWithoutFeedback>
  );
}
