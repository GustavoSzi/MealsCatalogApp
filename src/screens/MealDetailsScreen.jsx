import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import IngredientItem from "../components/IngredientItem/IngredientItem";
import Info from "../components/Info/Info";
import ListTitle from "../components/ListTitle/ListTitle";
import Step from "../components/Step/Step";

export default function MealDetailsScreen(props) {
  const selectedMeal = props.route.params.meal;
  const [favorite, setFavorite] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.mainContainer}>
        <Info
          duration={selectedMeal.duration}
          difficulty={selectedMeal.complexity}
          price={selectedMeal.affordability}
        />

        <View style={styles.addFavorite}>
          <TouchableWithoutFeedback
            onPress={() => {
              setFavorite(!favorite);
            }}
          >
            <Ionicons
              name={favorite ? "ios-star" : "ios-star-outline"}
              size={24}
              color='black'
            />
          </TouchableWithoutFeedback>
          <Text>{favorite ? "Remove from favorites" : "Add to Favorites"}</Text>
        </View>

        <View style={styles.listContainer}>
          <ListTitle icon='list' title={"Ingredients List"} />
          <View style={styles.ingredientsListContainer}>
            {selectedMeal.ingredients.map((ingredient, index) => {
              return <IngredientItem ingredient={ingredient} key={index} />;
            })}
          </View>
        </View>

        <View style={styles.listContainer}>
          <ListTitle icon='compass' title={"How to make"} />
          <View style={styles.stepsListContainer}>
            {selectedMeal.steps.map((step, index) => {
              return <Step index={index} step={step} key={index} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  ingredientsListContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 8,
  },
  listContainer: {
    width: "85%",
    marginVertical: 24,
  },
  stepsListContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#444",
    paddingRight: 8,
    borderRadius: 10,
  },
  addFavorite: {
    alignItems: "center",
    marginTop: 24,
  },
});
