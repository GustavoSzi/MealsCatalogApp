import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import mealsReducer from "./src/store/reducers/meals";

import MealsNavigation from "./src/navigation/MealsNavigation";

const fullReducers = combineReducers({
  meals: mealsReducer,
});

const store = createStore(fullReducers);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigation style={styles.container} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
