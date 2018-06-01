import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Text, Header, Left, Button, Icon, Body, Right, Content, Spinner, List, ListItem, Title, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SVGImage from 'react-native-svg-image';
import { getTeams, getteamsThunk, teamSelect, getscoreThunk } from '../actions/index';

export class TeamsList extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 4;
  }
  componentDidMount() {
    this.props.getscoreThunk();
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
    if (this.props.teams.score.length === 0) {
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
            <Text style={{ flex: 1, alignContent: 'center' }} > Loading Please Wait </Text>
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
            data={this.props.teams.score}
            renderItem={({ item }) =>
              <ListItem
                // id={item.code}

                item={item}
              >
                <Button transparent style={{ flex: 1, }}>
                <Text style={{ flex: 1, }}>{item.group}</Text>
                <Text style={{ flex: 6, }}>{item.team}</Text>
                <Text style={{ flex: 4, }}>Play {item.playedGames}</Text>
                <Text style={{ flex: 4, }}>Point {item.points}</Text>
                <Text style={{ flex: 4, }}>Goals {item.goals}</Text>
                </Button>
              </ListItem>}
            keyExtractor={(item, index) => item.team.toString()}
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
    teamSelect: teamSelect,
    getscoreThunk: getscoreThunk
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
