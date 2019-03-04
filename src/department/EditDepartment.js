import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Footer,
  Content,
  Form,
  Input,
  Item,
  Button,
  Icon,
  Text
} from "native-base";
import DepartmentStore from "./DepartmentStore";
import { inject, observer } from "mobx-react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  footer: {
    backgroundColor: "#9C27B0",
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});

class EditDepartment extends Component {
  state = {
    department: {
      id: "",
      name: "",
      description: "",
      head: "",
      code: ""
    },
    sent: false,
    error: ""
  };

  async componentDidMount() {
    await DepartmentStore.loadDepartment(this.props.navigation.getParam("id"));
    const department = DepartmentStore.selectedDepartment;
    this.setState({ department });
  }

  handleOnChangeText = (key, val) => {
    let department = { ...this.state.department };
    department[key] = val;
    this.setState({ department });
  };

  handleSubmit = async () => {
    await DepartmentStore.updateDepartment(this.state.department);
    this.props.navigation.goBack();
  };

  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {
      name,
      description,
      head,
      code
    } = DepartmentStore.selectedDepartment;
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder={name}
                onChangeText={text => this.handleOnChangeText("name", text)}
              />
            </Item>
            <Item>
              <Input
                placeholder={description}
                onChangeText={text =>
                  this.handleOnChangeText("description", text)
                }
              />
            </Item>
            <Item>
              <Input
                placeholder={head}
                onChangeText={text => this.handleOnChangeText("head", text)}
              />
            </Item>
            <Item>
              <Input
                placeholder={code}
                onChangeText={text => this.handleOnChangeText("code", text)}
              />
            </Item>
            <Button
              full
              warning
              rounded
              style={{ margin: 20 }}
              onPress={() => this.handleSubmit()}
            >
              <Text>Update</Text>
            </Button>
            <Button
              iconLeft
              full
              warning
              rounded
              bordered
              style={{ margin: 20 }}
              onPress={() => {
                this.handleGoBack();
              }}
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

export default inject("DepartmentStore")(observer(EditDepartment));
