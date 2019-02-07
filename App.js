import React, { Component } from "react";
import DepartmentStore from "./src/department/DepartmentStore";
import { Provider } from "mobx-react";
import DepartmentList from "./src/department/DepartmentList";
const store = {
  DepartmentStore
};

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <DepartmentList />
      </Provider>
    );
  }
}

export default App;
