import { GET_DATA, GET_ERROR } from "./action";

const initialState = {
  data: [],
  error: null,
  selected: null,
};

const reducer = (state = initialState, action) => {
  console.log(state, action.payload);
  switch (action.type) {
    case GET_DATA:
      console.log(state, action.payload);
      return { ...state, data: action.payload };

    case GET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
