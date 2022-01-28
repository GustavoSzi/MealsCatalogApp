import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

export default function Meal(props) {
  return (
    <TouchableOpacity
      onPress={props.onSelectMeal}
      style={styles.generalContainer}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: props.item.imageUrl }}
          resizeMode='cover'
          style={styles.image}
        >
          <Text style={styles.title} numberOfLines={1}>
            {props.item.title}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>
          Duration: {props.item.duration} minutes
        </Text>
        <Text style={styles.detailsText}>
          Difficulty: {props.item.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailsText}>
          Cost: {props.item.affordability.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
