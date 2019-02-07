import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
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
  Right
} from "native-base";

import { inject, observer } from "mobx-react";
import DepartmentStore from "./DepartmentStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20
  },
  cell: {
    backgroundColor: "yellow"
  },
  footer: {
    backgroundColor: "crimson"
  }
});

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

  async componentDidMount() {
    const { DepartmentStore } = this.props;
    DepartmentStore.loadDepartments();
  }

  render() {
    const { DepartmentStore } = this.props;
    console.log(DepartmentStore.allDepartments);
    return (
      <Container>
        <Content>
          {DepartmentStore.allDepartments.map(d => (
            <ListItem>
              <Left>
                <Text>{d.name}</Text>
              </Left>
              <Body>
                <Text>{d.description}</Text>
                <Text note>{d.head}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </Content>
        <Footer style={styles.footer} />
      </Container>
    );
  }
}

export default inject("DepartmentStore")(observer(DepartmentList));

{
  /*
<Card>
  <CardItem>
    <Body>
    <Text>{d.name}</Text>
    </Body>
  </CardItem>
</Card>*/
}
