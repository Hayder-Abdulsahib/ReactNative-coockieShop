import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { List } from "native-base";

const BakeryItem = ({ bakery }) => {
  return (
    // if we use list.item then we can't use view
    <List.Item>{bakery.name}</List.Item>
  );
};

export default BakeryItem;
