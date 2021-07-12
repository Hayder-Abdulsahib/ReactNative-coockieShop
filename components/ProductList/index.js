import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Box, Center, List, Spinner } from "native-base";

const ProductList = (props) => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="green" />
      </Center>
    );

  const listOfProducts = props.productsIds.map((_product) =>
    products.find((product) => product.id === _product.id)
  );

  const productList = listOfProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <Center flex={1}>
      <Text>Product List</Text>
      <Box w="80%">
        <List space={1} my={2}>
          {productList}
        </List>
      </Box>
    </Center>
  );
};

export default ProductList;
