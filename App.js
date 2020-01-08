import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/SearchScreen";
import ResultShowScreen from "./src/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
