import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen(props) {
  function Card(itemData) {
    return (
      <TouchableOpacity
        style={{ ...styles.card, backgroundColor: itemData.item.color }}
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
        activeOpacity={0.8}
      >
        <View>
          <Text>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={Card}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
  },
  card: {
    height: 156,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "transparent",
  },
});
