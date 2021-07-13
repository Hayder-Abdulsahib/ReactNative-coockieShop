import React from "react";

//styles
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

//redux
import { Provider } from "react-redux";

//store
import store from "./store";

//components
import StackNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/* <ThemeProvider theme={theme.dark}> */}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        {/* </ThemeProvider> */}
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
