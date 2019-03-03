import { createAppContainer, createStackNavigator } from "react-navigation";
import App from "./src/App";
import DepartmentList from "./src/department/DepartmentList";
import EditDepartment from "./src/department/EditDepartment";

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
  departmentList: {
    screen: DepartmentList,
    navigationOptions: () => ({
      title: "List",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "indigo"
      },
      gesturesEnabled: false
    })
  },
  editDepartment: {
    screen: EditDepartment,
    navigationOptions: () => ({
      title: "Edit",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "indigo"
      },
      gesturesEnabled: false
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
