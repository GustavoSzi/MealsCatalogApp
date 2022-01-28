import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

import FiltersScreen from "../screens/FiltersScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MealsNavigation() {
  const CategoryStackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='CategoriesStack' component={CategoriesScreen} />
        <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} />
      </Stack.Navigator>
    );
  };

  const FavoritesStackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName='FavoritesStack'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='FavoritesStack' component={FavoritesScreen} />
        <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
      </Stack.Navigator>
    );
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Categories") {
              iconName = "ios-restaurant";
            } else {
              iconName = "ios-star";
            }

            return (
              <Ionicons
                name={iconName}
                size={25}
                color={focused ? Colors.primaryDark : "#333"}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name='Categories'
          component={CategoryStackNavigator}
          headerTitle='Categories'
        />
        <Tab.Screen name='Favorites' component={FavoritesStackNavigator} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <Drawer.Navigator
        screenOptions={({ route }) => {
          return {
            headerShown: false,
          };
        }}
      >
        <Drawer.Screen name='Home' component={TabNavigator} />
        <Drawer.Screen name='Filters' component={FiltersScreen} />
        <Drawer.Screen name='About' component={AboutScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
