import request from "superagent";
const baseUrl = "http://localhost:4000";

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
