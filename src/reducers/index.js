import { combineReducers } from 'redux';
import getTeams from './getTeams';
import ActiveTeam from './activeTeam';

export default combineReducers({
    getTeams: getTeams,
    activeTeam: ActiveTeam
});
