export const addItemToCart = (cartItems, cartItemToAdd) => {
    // if there's an item finded, item is to be store in this variable
    // if not ==> undefined
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    // if item exists, return an array after looped through the previous array 
    // if the ids match ==> increase the quantity by 1 
    // if the ids don't match ==> return the item
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }
    // Return a new array with a copy of previous array and new item
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};