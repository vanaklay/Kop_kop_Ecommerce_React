import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_QUANTITY } from '../actions/types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => ({ type: ADD_ITEM, payload: item });

export const removeQuantity = item => ({ type: REMOVE_QUANTITY, payload: item });

export const removeItem = item => ({ type: REMOVE_ITEM, payload: item});