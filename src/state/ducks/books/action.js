import * as Actions from "./types";

export const addBook = values => {
    return dispatch => {
        dispatch({type: Actions.ADD_BOOK, payload: values})
    };
};