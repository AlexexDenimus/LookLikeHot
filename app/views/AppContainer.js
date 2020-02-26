import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "./App.tsx";

const RootStack = createStackNavigator(
  {
    Home: { screen: App, path: "/" }
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
