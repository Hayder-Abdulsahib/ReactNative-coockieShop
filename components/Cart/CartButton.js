import React from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { CART_LIST } from "../Navigation/types";

const CartButton = ({ navigation }) => {
  //this prop is coming from the navigation index page when we pass it in the screen of BAKERY_DETAIL
  return (
    <Icon
      as={MaterialCommunityIcons}
      name="cart-arrow-down"
      color="white"
      onPress={() => navigation.navigate(CART_LIST)}
    />
  );
};

export default CartButton;
