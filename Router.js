import { createAppContainer, createStackNavigator } from "react-navigation";
import App from "./App";
import DepartmentList from "./src/department/DepartmentList";

const MainNavigator = createStackNavigator({
  router: {
    screen: App,
    navigationOptions: () => ({
      title: "App",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "indigo"
      }
    })
  },
  list: {
    screen: DepartmentList,
    navigationOptions: () => ({
      title: "List",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "indigo"
      }
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
