import { create } from 'apisauce';
const api = create({
  // baseURL: "https://api.github.com",
  // headers: { 'Accept': 'application/vnd.github.v3+json' }
  baseURL: "http://api.football-data.org/v1/competitions/467",

  headers: {
    "X-Auth-Token": "0c3e6fb1f5d645c5a7e878b4a3afa449",
    'Accept': 'application/json'
  }
});


export const getTeams = (response) => ({
  type: 'getTeam',
  payload: response
});

export const teamSelect = (team) => ({
  type: 'activeTeam',
  payload: team
});

export const getteamsThunk = () => {
  return dispatch => {
    dispatch({ type: "Loading" });
    api
      .get("/teams")
      .then((r) => {
        console.log(r.data);
        // const lis = r.slice(0, 10);
        dispatch(getTeams(r.data));
      })
      .catch((e) => console.log(e));

  };
};

export const getScore = (response) => ({
  type: 'getScore',
  payload: response
});

export const getscoreThunk = () => {
  return dispatch => {
    dispatch({ type: "Loading" });
    api
      .get("/leagueTable")
      .then((r) => {
        console.log(r.data);
        // const lis = r.slice(0, 10);
        this.c = r.data.standings;
        this.arr = [].concat(this.c.A, this.c.B, this.c.C,
          this.c.D, this.c.E, this.c.F, this.c.G, this.c.H);
        console.log(this.arr);
        dispatch(getScore(this.arr));
      })
      .catch((e) => console.log(e));

  };
};

export const getMatches = (response) => ({
  type: 'getMatches',
  payload: response
});

export const getMatchesThunk = () => {
  return dispatch => {
    dispatch({ type: "Loading" });
    api
      .get("/fixtures")
      .then((r) => {
        console.log(r.data);
        dispatch(getMatches(r.data.fixtures));
      })
      .catch((e) => console.log(e));

  };
};