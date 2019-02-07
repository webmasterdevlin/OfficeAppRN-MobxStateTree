import { createAppContainer, createStackNavigator } from "react-navigation";
import App from "./App";
import DepartmentList from "./src/department/DepartmentList";

const MainNavigator = createStackNavigator({
  router: {
    screen: App,
    navigationOptions: () => ({
      title: "App",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "indigo"
      }
    })
  },
  list: {
    screen: DepartmentList,
    navigationOptions: () => ({
      title: "List",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "indigo"
      }
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
