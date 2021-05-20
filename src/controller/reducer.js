import { GET_DATA, GET_ERROR, SET_FULLTIME, SET_LOCATION } from "./action";

const initialState = {
  data: [],
  error: null,
  fulltime: false,
  location: "",
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };

    case GET_ERROR:
      return { ...state, error: action.payload };

    case SET_FULLTIME:
      return { ...state, fulltime: action.payload };

    case SET_LOCATION:
      return { ...state, location: action.payload };

    default:
      return state;
  }
};

export default reducer;
