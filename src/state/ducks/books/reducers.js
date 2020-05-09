import * as Actions from "./types"

const initialState = {
    data: [],
    loading: false
};

const booksReducer = (state=initialState, action) => {
  switch (action.type) {
      case Actions.ADD_BOOK:
          return {
              ...state,
              data: [...state.data, action.payload]
          };
      case Actions.SET_BOOKS:
          return {
              ...state,
              data: action.payload,
              loading: false
          }
      case Actions.LOAD_BOOKS:
          return {
              ...state,
              loading: true
          };
      default:
          return state;
  }
};

export default booksReducer;