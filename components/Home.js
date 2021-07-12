import React from "react";

// Styling
import {
  ImageBackground,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <View
        style={{
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black", fontSize: 38, textAlign: "center" }}>
          Cookies & Beyond
        </Text>
        <Button
          onPress={() => alert("we dilever the best coockies")}
          title="What we do"
          color="#725114"
          accessibilityLabel="Learn more about this purple button"
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
      </View>
    </ImageBackground>
  );
};

export default Home;
