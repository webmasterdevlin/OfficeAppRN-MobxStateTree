import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});
class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button title="Go" onPress={() => navigate("departmentList")} />
      </View>
    );
  }
}
export default App;
