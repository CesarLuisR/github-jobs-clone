import {
  GET_DATA,
  GET_ERROR,
  SET_FULLTIME,
  SET_LOCATION,
  SET_SEARCH_LOCATION,
  SET_SEARCH,
  CLEAR,
} from "./action";

const initialState = {
  data: [],
  error: null,
  fulltime: false,
  location: "",
  searchLocation: "",
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

    case SET_SEARCH_LOCATION:
      return { ...state, searchLocation: action.payload };

    case SET_SEARCH:
      return { ...state, search: action.payload };

    case CLEAR:
      return { ...state, data: [] };

    default:
      return state;
  }
};

export default reducer;
