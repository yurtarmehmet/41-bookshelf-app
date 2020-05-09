import * as Actions from "./types"

const initialState = {
    data: []
};

const booksReducer = (state=initialState, action) => {
  switch (action.type) {
      case Actions.ADD_BOOK:
          return {
              ...state,
              data: [...state.data, action.payload]
          };
      default:
          return state;
  }
};

export default booksReducer;