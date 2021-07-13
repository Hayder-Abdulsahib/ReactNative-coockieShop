import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import * as types from "./types";

//components
import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        // headerTransparent: true, this will make the navigation bar transparent put you should be careful while applying it because it may affect the page
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
        cardStyle: { backgroundColor: "green" },
      }}
    >
      <Screen
        name={types.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={types.BAKERY_LIST}
        component={BakeryList}
        options={{ title: "Bakeries" }}
      />
      <Screen
        name={types.BAKERY_DETAIL}
        component={BakeryDetail}
        options={({ route }) => ({
          title: route.params.bakery.name,
        })}
      />
    </Navigator>
  );
};

export default StackNavigator;
