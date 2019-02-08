import React, { Component } from "react";
import DepartmentStore from "./src/department/DepartmentStore";
import DepartmentList from "./src/department/DepartmentList";

import { Provider } from "mobx-react";
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
