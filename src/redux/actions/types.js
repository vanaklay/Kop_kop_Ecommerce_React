// UserAction
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// CartAction
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_QUANTITY = 'REMOVE_QUANTITY';

// ShopAction
// export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';
// Tell to redux we're starting to fetch data
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
// Where it comes back from us with a successful API request and the data that we need
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
// It's what happens if whatever makes an API call fail
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';