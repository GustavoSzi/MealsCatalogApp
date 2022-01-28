import { FlatList, View, Text } from "react-native";
import React from "react";
import Meal from "../Meal/Meal";
import styles from "./styles";

export default function MealList(props) {
  // props.navigation.setOptions({ title: props.category });

  function renderItem({ item }) {
    return (
      <Meal
        item={item}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetails", {
            meal: item,
          });
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Category: {props.category}</Text>
      <View style={styles.listContainer}>
        <FlatList data={props.listData} renderItem={renderItem} />
      </View>
    </View>
  );
}
