import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import VocabQuizScreen from "./screens/VocabQuizScreen";
import Quiz from "./screens/Quiz/Quiz";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Quiz: Quiz
  },
  {
    initialRouteName: "Quiz",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
