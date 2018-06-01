import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Text, Header, Left, Button, Icon, Body, Right, Content, Spinner, List, ListItem, Title, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SVGImage from 'react-native-svg-image';
import { getTeams, getteamsThunk, teamSelect } from '../actions/index';

export class Team extends Component {

    players() {
        return <Spinner />;
    }

    render() {
        console.log(this.props);
        
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> {this.props.activeTeam.name} </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <SVGImage
                        style={{ height: 480, width: 480 }}
                        source={{ uri: this.props.activeTeam.crestUrl }}
                    />
                    <Text> {this.props.activeTeam.name} </Text>
                    {this.players()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    teams: state.getTeams,
    activeTeam: state.activeTeam
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTeams: getTeams,
        getteamsThunk: getteamsThunk,
        teamSelect: teamSelect
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
