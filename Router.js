import { createAppContainer, createStackNavigator } from "react-navigation";

import DepartmentList from "./src/department/DepartmentList";
import EditDepartment from "./src/department/EditDepartment";
import NewDepartment from "./src/department/NewDepartment";

const MainNavigator = createStackNavigator({
  departmentList: {
    screen: DepartmentList,
    navigationOptions: () => ({
      title: "React Native - Mobx State Tree",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "#9C27B0"
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
        backgroundColor: "#9C27B0"
      }
    })
  },
  editDepartment: {
    screen: EditDepartment,
    navigationOptions: () => ({
      title: "Edit",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "#9C27B0"
      },
      gesturesEnabled: false
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
