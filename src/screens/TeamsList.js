import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Text, Header, Left, Button, Icon, Body, Right, Content, Spinner, List, ListItem, Title, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SVGImage from 'react-native-svg-image';
import { getTeams, getteamsThunk, teamSelect } from '../actions/index';

const groups = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
  "Group H",
  "Group I",
];

export class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 4;
  }
  componentDidMount() {
    this.props.getteamsThunk();
  }

  sep() {
    //if(this.y == 4){
    return (
      <ListItem itemDivider>
        <Left />
        <Body style={{ marginRight: 40 }}>
          <Text style={{ fontWeight: "bold" }}>
            {groups[this.x]}
          </Text>
        </Body>
        <Right />
      </ListItem>
    );
    //  }
  }
  render() {
    console.log(this.props);
    if (this.props.teams.list.length === 0) {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title> Teams List </Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text style={{ flex: 1, alignContent: 'center', alignItems: 'center', }} > Loading Please Wait </Text>
            <Spinner />
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title> Teams List </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={this.props.teams.list.teams}
            renderItem={({ item }) =>
              <ListItem
                // id={item.code}
                onPressItem={() => {
                  this.props.teamSelect(item);
                  Actions.TeamInfo();
                }}
                item={item}
              >
                <Button transparent block
                  onPress={() => {
                    this.props.teamSelect(item);
                    Actions.TeamInfo();
                  }}>
                  <Text>{item.name}</Text>
                </Button>
              </ListItem>}
            keyExtractor={(item, index) => item.name.toString()}
          />

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.getTeams,
  activeTeam: state.ActiveTeam
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTeams: getTeams,
    getteamsThunk: getteamsThunk,
    teamSelect: teamSelect
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
