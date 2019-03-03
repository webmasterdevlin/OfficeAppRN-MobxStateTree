import React, { Component } from "react";

import {
  Container,
  Footer,
  Content,
  Form,
  Input,
  Item,
  Icon,
  Button,
  Text
} from "native-base";
import { StyleSheet } from "react-native";

import { inject, observer } from "mobx-react";
import DepartmentStore from "./DepartmentStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  footer: {
    backgroundColor: "indigo",
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});

class NewDepartment extends Component {
  state = {
    department: {
      id: "",
      name: "",
      description: "",
      head: "",
      code: ""
    }
  };

  handleOnChangeText = (key, val) => {
    let department = { ...this.state.department };
    department[key] = val;
    this.setState({ department });
  };

  handleSubmit = async () => {
    const { name, code, description, head } = this.state.department;
    if (!name | !code | !description || !head) {
      alert("Please fill out the whole form");
    } else {
      await DepartmentStore.addDepartment(this.state.department);
      this.props.navigation.goBack();
    }
  };

  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="name"
                onChangeText={text => this.handleOnChangeText("name", text)}
              />
            </Item>
            <Item>
              <Input
                placeholder="description"
                onChangeText={text =>
                  this.handleOnChangeText("description", text)
                }
              />
            </Item>
            <Item>
              <Input
                placeholder="head"
                onChangeText={text => this.handleOnChangeText("head", text)}
              />
            </Item>
            <Item>
              <Input
                placeholder="code"
                onChangeText={text => this.handleOnChangeText("code", text)}
              />
            </Item>
            <Button
              full
              success
              rounded
              style={{ margin: 20 }}
              onPress={() => this.handleSubmit()}
            >
              <Text>Add</Text>
            </Button>
            <Button
              iconLeft
              full
              success
              rounded
              bordered
              style={{ margin: 20 }}
              onPress={() => this.handleGoBack()}
            >
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Form>
        </Content>
        <Footer style={styles.footer} />
      </Container>
    );
  }
}

export default inject("DepartmentStore")(observer(NewDepartment));
