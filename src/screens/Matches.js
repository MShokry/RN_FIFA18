import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Text, Header, Left, Button, Icon, Body, Right, Content, Spinner, List, ListItem, Title, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { getMatches, getMatchesThunk } from '../actions/index';

export class Matches extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 4;
  }
  componentDidMount() {
    this.props.getMatchesThunk();
  }

  render() {
    console.log(this.props);
    if (this.props.teams.matches.length === 0) {
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
            data={this.props.teams.matches}
            renderItem={({ item }) =>
              <ListItem
                // id={item.code}
                item={item}
              >
                <Button transparent style={{ flex: 1, }}>
                  <Text style={{ flex: 8, }}>{item.homeTeamName}</Text>
                  <Text style={{ flex: 2, }}>{item.result.goalsHomeTeam}</Text>
                  <Text style={{ flex: 1, }}>:</Text>
                  <Text style={{ flex: 2, }}>{item.result.goalsAwayTeam}</Text>
                  <Text style={{ flex: 8, }}>{item.awayTeamName}</Text>
                </Button>

              </ListItem>}
            // keyExtractor={(item, index) => item.team.toString()}
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
    getMatches: getMatches,
    getMatchesThunk: getMatchesThunk,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
