import { createSelector } from 'reselect';

// 3. We passing the whole reducer state
// and return the cart object from our combine reducers
const selectCart = state => state.cart;

// 2. Then we need a reference to selectCart 
// 4. The cart object gets passed into this function 
// which passes out the cartItems array 
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// 1. When calling this, we need to reference to selectCartItems 
// 5. The cartItems becomes selecCartItemsCount because it's relying on the selector 
// passes the cartItems into this function which reduces over and gives us our cardItemCount
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
);

