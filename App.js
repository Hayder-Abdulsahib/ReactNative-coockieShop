import React from "react";

//styles
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";

//redux
import { Provider } from "react-redux";

//store
import store from "./store";

//components
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import BakeryList from "./components/BakeryList";
import BakeryDetail from "./components/BakeryDetail";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <ThemeProvider theme={theme.dark}>
          <Home />
          {/* <ProductList /> */}
          {/* <BakeryList /> */}
          {/* <BakeryDetail /> */}
        </ThemeProvider>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const theme = {
  light: {
    color: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    color: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
