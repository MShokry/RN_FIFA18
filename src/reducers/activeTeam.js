export default (state = null, action) => {
    switch (action.type) {
        case 'activeTeam':
            return action.payload;
        default:
            return state;
    }
};
