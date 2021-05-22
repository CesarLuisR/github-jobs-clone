// Consts
export const GET_DATA = "GET_DATA";
export const GET_ERROR = "GET_ERROR";
export const SET_FULLTIME = "SET_FULLTIME";
export const SET_LOCATION = "SET_LOCATION";
export const SET_SEARCH_LOCATION = "SET_SEARCH_LOCATION";
export const SET_SEARCH = "SET_SEARCH";
export const CLEAR = "CLEAR";

// Actions
export const getData = (data) => (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: data,
  });
};

export const getError = (error) => (dispatch) => {
  dispatch({
    type: GET_ERROR,
    payload: error,
  });
};

export const setFullTime = (data) => (dispatch) => {
  dispatch({
    type: SET_FULLTIME,
    payload: data,
  });
};

export const setLocation = (location) => (dispatch) => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  });
};

export const setSearchLocation = (search) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_LOCATION,
    payload: search,
  });
};

export const setSearch = (search) => (dispatch) => {
  dispatch({
    type: SET_SEARCH,
    payload: search,
  });
};

export const Clear = () => (dispatch) => {
  dispatch({
    type: CLEAR,
    payload: [],
  });
};
