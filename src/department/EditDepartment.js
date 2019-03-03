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
    backgroundColor: "indigo",
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
  }

  handleOnChangeText = () => {};

  handleSubmit = () => {};

  handleGoBack = () => {};

  _loadDepartment = () => {};

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
              <Input placeholder={name} />
            </Item>
            <Item>
              <Input placeholder={description} />
            </Item>
            <Item>
              <Input placeholder={head} />
            </Item>
            <Item>
              <Input placeholder={code} />
            </Item>
            <Button>
              <Text>Update</Text>
            </Button>
            <Button>
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
