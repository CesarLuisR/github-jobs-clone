// Consts
export const GET_DATA = "GET_DATA";
export const GET_ERROR = "GET_ERROR";

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
