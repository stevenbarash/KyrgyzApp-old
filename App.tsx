import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import VocabQuizScreen from "./screens/VocabQuizScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Quiz: VocabQuizScreen
  },
  {
    initialRouteName: "Quiz",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
