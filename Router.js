import { createAppContainer, createStackNavigator } from "react-navigation";
import App from "./src/App";
import DepartmentList from "./src/department/DepartmentList";
import EditDepartment from "./src/department/EditDepartment";
import NewDepartment from "./src/department/NewDepartment";

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
  newDepartment: {
    screen: NewDepartment,
    navigationOptions: () => ({
      title: "New",
      headerTintColor: "#F4F3EE",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "indigo"
      }
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
