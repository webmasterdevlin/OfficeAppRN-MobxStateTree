import React, { Component } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import {
  Container,
  Header,
  Footer,
  Content,
  View,
  Text,
  List,
  ListItem,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  SwipeRow
} from "native-base";

import { inject, observer } from "mobx-react";
import DepartmentStore from "./DepartmentStore";

class DepartmentList extends Component {
  state = {
    error: "",
    fetching: "",
    isShowNewItemForm: false,
    department: {
      id: "",
      name: "",
      description: "",
      head: "",
      code: ""
    }
  };

  deleteDepartment = department => {
    Alert.alert(
      "Deleting Department",
      "Are you sure you want to delete this department?",
      [
        {
          text: "Cancel",
          onPress: () => console.warn("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            console.warn("Yes Pressed");
            alert("Deleted: ", department.name);
            this.props.DepartmentStore.removeDepartment(department);
          }
        }
      ]
    );
  };

  async componentDidMount() {
    const { DepartmentStore } = this.props;
    DepartmentStore.loadDepartments();
  }

  render() {
    const { DepartmentStore } = this.props;
    return (
      <Container>
        <Content scrollEnabled={true}>
          {DepartmentStore.allDepartments.map(d => (
            <SwipeRow
              key={d.id}
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button success onPress={() => alert(`Edit: ${d.name}`)}>
                  <Icon active name="create" />
                </Button>
              }
              body={
                <View style={styles.cell}>
                  <View>
                    <Text>{d.name}</Text>
                    <Text note>{d.description}</Text>
                  </View>
                  <View style={styles.cell}>
                    <Text>{d.head}</Text>
                  </View>
                </View>
              }
              right={
                <Button danger onPress={() => this.deleteDepartment(d)}>
                  <Icon active name="trash" />
                </Button>
              }
            />
          ))}
        </Content>
        <Footer style={styles.footer} />
      </Container>
    );
  }
}

export default inject("DepartmentStore")(observer(DepartmentList));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20
  },
  cell: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  footer: {
    backgroundColor: "indigo"
  }
});
