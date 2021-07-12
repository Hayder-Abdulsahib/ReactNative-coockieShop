import { Center } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../ProductList";

const BakeryDetail = () => {
  const bakeries = useSelector((state) => state.bakeries.bakeries[0]);
  console.log(bakeries);

  return (
    <Center flex={1}>
      <Text>{bakeries.name}</Text>
      <ProductList productsIds={bakeries.products} />
    </Center>
  );
};

export default BakeryDetail;
