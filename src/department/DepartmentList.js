import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
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
    },
    departments: []
  };

  handleEditDepartment = id => {};

  handleDeleteDepartment = department => {
    Alert.alert(
      "Deleting Department",
      "Are you sure you want to delete this department?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            this.props.DepartmentStore.removeDepartment(department);
          },
          styles: "destructive"
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
                <Button success onPress={() => this.handleEditDepartment(d.id)}>
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
                <Button danger onPress={() => this.handleDeleteDepartment(d)}>
                  <Icon active name="trash" />
                </Button>
              }
            />
          ))}
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footerText} note>
            Total number of departments: {DepartmentStore.allDepartments.length}
          </Text>
        </Footer>
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
    backgroundColor: "indigo",
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});
