const init = {
    list: [],
    score: [],
    matches: []
};

export default (state = init, action) => {
    switch (action.type) {
        case 'getTeam':
            return { ...state, list: action.payload };
        case 'getScore':
            return { ...state, score: action.payload };
        case 'getMatches':
            return { ...state, matches: action.payload };
        default:
            return state;
    }
};
