import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Box, Center, List } from "native-base";

import CartItem from "./CartItem";

const CartList = () => {
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <Center flex={1}>
      <Box w="80%">
        <Text>Cart List</Text>
        <List space={2} my={2}>
          {cartItems}
        </List>
      </Box>
    </Center>
  );
};

export default CartList;
