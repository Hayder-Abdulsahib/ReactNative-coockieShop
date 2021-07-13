import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import * as types from "./types";

//components
import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator initialRouteName={types.HOME}>
      <Screen name={types.HOME} component={Home} />
      <Screen name={types.BAKERY_LIST} component={BakeryList} />
      <Screen name={types.BAKERY_DETAIL} component={BakeryDetail} />
    </Navigator>
  );
};

export default StackNavigator;
