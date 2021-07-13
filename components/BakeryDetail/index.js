import { Center } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";

const BakeryDetail = ({ route }) => {
  const { bakery } = route.params;
  console.log(route.params);
  // const bakeries = useSelector((state) => state.bakeries.bakeries[0]);

  // bakeries = bakeries.filter((_product) => _product.bakeryId === bakery.id);

  return (
    <Center flex={1}>
      <Text>{bakery.name}</Text>
      <ProductList productsIds={bakery.products} />
    </Center>
  );
};

export default BakeryDetail;
