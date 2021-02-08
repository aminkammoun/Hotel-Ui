import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
const screens = {
  Home: {
    screen: HomeScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
