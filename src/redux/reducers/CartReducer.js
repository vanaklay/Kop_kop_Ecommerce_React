import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_QUANTITY } from '../actions/types';
import { addItemToCart, removeItemToCart, removeQuantityToItem } from '../utils/cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
        case ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
        case REMOVE_QUANTITY:
            return { ...state, cartItems: removeQuantityToItem(state.cartItems, action.payload) };
        case REMOVE_ITEM:
            return { ...state, cartItems: removeItemToCart(state.cartItems, action.payload) };
        default:
            return state;
    }
};