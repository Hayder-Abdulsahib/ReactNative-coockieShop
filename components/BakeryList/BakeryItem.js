import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { List } from "native-base";
import { BAKERY_DETAIL } from "../Navigation/types";

const BakeryItem = ({ navigation, bakery }) => {
  return (
    // if we use list.item then we can't use view
    <List.Item onPress={() => navigation.navigate(BAKERY_DETAIL, { bakery })}>
      {bakery.name}
    </List.Item>
  );
};

export default BakeryItem;
