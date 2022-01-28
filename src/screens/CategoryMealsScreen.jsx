import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

export default function CategoryMealsScreen(props) {
  const id = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

  const mealsToDisplay = MEALS.filter((meal) => {
    return meal.categoryIds.includes(id);
  });

  return (
    <MealList
      category={selectedCategory.name}
      listData={mealsToDisplay}
      navigation={props.navigation}
    />
  );
}
