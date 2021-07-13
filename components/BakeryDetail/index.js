import { Center } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";

const BakeryDetail = ({ route }) => {
  const { bakery } = route.params;
  const bakeries = useSelector((state) => state.bakeries.bakeries[0]);

  // bakeries = bakeries.filter((_product) => _product.bakeryId === bakery.id);

  console.log(bakeries);

  return (
    <Center flex={1}>
      <Text>{bakeries.name}</Text>
      <ProductList productsIds={bakeries.products} />
    </Center>
  );
};

export default BakeryDetail;
