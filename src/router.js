import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import { Container, Text,  } from 'native-base';
import Welcome from './screens/welcome';
import TeamsList from './screens/TeamsList';
import Team from './screens/Team';
import TeamsScore from './screens/TeamsScore';
import Matches from './screens/Matches';

class Rutes extends Component {

  render() {
    console.log("test4");
    return (
      <Router hideNavBar={true} >
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} hideNavBar={true} />
          <Scene key="TeamsList" component={TeamsList} title="Teams List" hideNavBar={true} />
          <Scene key="TeamInfo" component={Team} title="Team" hideNavBar={true} />
          <Scene key="TeamScore" component={TeamsScore} title="Team" hideNavBar={true} />
          <Scene key="Matches" component={Matches} title="Team" hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

export default Rutes;
