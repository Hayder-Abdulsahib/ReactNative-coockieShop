import React from "react";

import { useSelector } from "react-redux";
import BakeryItem from "./BakeryItem";

//styling
import styles from "./styles";
import { Text, View } from "react-native";
import { Box, Center, List, Spinner } from "native-base";

const BakeryList = () => {
  const bakeries = useSelector((state) => state.bakeries.bakeries);
  const loading = useSelector((state) => state.bakeries.loading);

  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="green" />
      </Center>
    );

  //we have to use the map after the loading or it will not make sence
  const bakeryList = bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} />
  ));

  return (
    // when we use cenetr we can't use view or it will not give us data
    <Center flex={1}>
      <Box w="80%">
        <Text>Backery List</Text>
        <List space={2} my={2}>
          {bakeryList}
        </List>
      </Box>
    </Center>
  );
};

export default BakeryList;
