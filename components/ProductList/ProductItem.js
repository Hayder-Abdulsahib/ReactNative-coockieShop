import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductItem;
