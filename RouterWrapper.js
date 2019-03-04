import { Provider } from "mobx-react";
import React from "react";
import Router from "./Router";

import DepartmentStore from "./src/department/DepartmentStore";
const store = {
  DepartmentStore
};

class RouterWrapper extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Router />
      </Provider>
    );
  }
}

export default RouterWrapper;
