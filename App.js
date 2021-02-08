import React from "react";
import { StatusBar, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import COLORS from "./src/consts/Colors";
import DetailsScreen from "./src/screens/DetailsScreen";
import Navigator from "./src/routes/homeScreen";
const App = () => {
  return <Navigator />;
};

export default App;
