import React from "react";

// Styling
import {
  ImageBackground,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

import { BAKERY_LIST } from "./Navigation/types";

const Home = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={1} //if we put true instead of 1 it will misbehave and if we put false or 0 it will stop working, we put this code so we using cardStyle from the navigation there will be no wierd background color we going to another page
      onPress={() => navigation.navigate(BAKERY_LIST)}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
        }}
      >
        {/* <View
          style={{
            height: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        <Text style={{ color: "black", fontSize: 38, textAlign: "center" }}>
          Cookies & Beyond
        </Text>
        <Button
          onPress={() => alert("we dilever the best coockies")}
          title="What we do"
          color="#725114"
          accessibilityLabel="Learn more about this purple button"
          style={{ width: "10px" }}
        />
        <Text>{"\n"}</Text>
        <TouchableOpacity
          onPress={() =>
            alert("We are one of the best stores in the midde eastr")
          }
          style={{ backgroundColor: "#725114" }}
        >
          <Text style={{ fontSize: 19, color: "#fff" }}>Who We Are</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 19, color: "black" }}>
          {"\n"}Check our Store
        </Text>
        {/* </View> */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Home;
