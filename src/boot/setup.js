import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import App from "../App";

export default function(stores) {
  return class Setup extends Component {
    componentWillMount() {
      this.loadFonts();
    }
    render() {
      return (
        <Provider {...stores}>
          <App />
        </Provider>
      );
    }
  };
}
