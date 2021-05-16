import { GET_DATA, GET_ERROR } from "./action";

const initialState = {
  data: [],
  error: null,
  search: "",
  page: 0,
  selected: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };

    case GET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
