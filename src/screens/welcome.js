import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Left, Right, Body, Title, Content, Card, CardItem, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export class welcome extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title> Welcome </Title>
          </Body>
          <Right />
        </Header>
        <Content 
        contentContainerStyle={{
          justifyContent: 'center', 
          paddingTop: 40,
          alignItems: 'center', 
          paddingHorizontal: 10,
        }}
        >
          <Button dark full onPress={() => { Actions.TeamsList(); }} >
          <Text>Teams List</Text>
          </Button>
          <Button full onPress={() => { Actions.TeamScore(); }} >
            <Text>Teams Score</Text>
          </Button>
          <Button dark full onPress={() => { Actions.Matches(); }} >
            <Text>Matches</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  active: state.activeRepo,
  repos: state.gitRepo
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(welcome);
