const addCartItem = (cart) => ({
    type: 'ADD_TO_CART',
    cart
})
const changeCountCartItem = (id, counter) => ({
    type: 'CHANGE_COUNTER_IN_CART',
    id,
    counter
})
const removeCartItem = (id) => ({

    type: 'REMOVE_CART_ITEM',
    id,
})
const removeAllItem = {
    type: 'REMOVE_ALL_ITEM',
}


export { addCartItem, changeCountCartItem, removeCartItem, removeAllItem }