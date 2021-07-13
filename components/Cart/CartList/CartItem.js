import { List, HStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const CartItem = ({ item }) => {
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>{item.price * item.quantity} JD</Text>
    </HStack>
  );
};

export default CartItem;
