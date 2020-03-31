import request from "superagent";
const baseUrl = "http://localhost:4000";
const googleKey = "AIzaSyAPU3Byc-ML0f-09-kZZsbiAgMQEHtGg_4";

// Reading all markets:

export const GET_ALL_MARKETS = "GET_ALL_MARKETS";
function gettingAllMarkets(payload) {
  return {
    type: GET_ALL_MARKETS,
    payload
  };
}

export const getAllMarkets = () => (dispatch, getState) => {
  request(`${baseUrl}/market`)
    .then(response => {
      const action = gettingAllMarkets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Reading searched markets

export const GET_SEARCHED_MARKETS = "GET_SEARCHED_MARKETS";
function gettingSearchedMarkets(payload) {
  return {
    type: GET_SEARCHED_MARKETS,
    payload
  };
}

export const getSearchedMarkets = keyword => (dispatch, getState) => {
  request
    .get(`${baseUrl}/market`, { searched: keyword })
    .then(response => {
      const action = gettingSearchedMarkets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// export const getSearchedMarkets = searchRequest => (dispatch, getState) => {
//   request(`${baseUrl}/market/${searchRequest}`)
//     .send(searchRequest)
//     .then(response => {
//       // const data = { body: response.body, searchRequest: searchRequest };
//       // data.searchRequest = searchRequest;
//       // console.log("data is:", data);

//       const action = gettingSearchedMarkets(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };

// Fetching searched markets results

export const FETCH_MARKETS = "FETCH_MARKETS";
function fetchingMarkets(payload) {
  return {
    type: FETCH_MARKETS,
    payload
  };
}

export const fetchMarkets = input => (dispatch, getState) => {
  request
    .get(`${baseUrl}/find`, { searched: input })
    .then(response => {
      const action = fetchingMarkets(JSON.parse(response.body).results);
      dispatch(action);
    })
    .catch(console.error);
};

// Creating a market:

export const CREATE_MARKET = "CREATE_MARKET";
function creatingMarket(payload) {
  return {
    type: CREATE_MARKET,
    payload
  };
}

export const createMarket = market => (dispatch, getState) => {
  request
    .post(`${baseUrl}/market`)
    .send(market)
    .then(response => {
      const action = creatingMarket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
