const cartReducer = (state = [], action) => {

    switch (action.type) {

        case "ADD_TO_CART": {
            let flag = false;

            const buffState = state.map(item => {

                if (action.cart.id === item.id) {
                    flag = true;
                    return { ...item, count: item.count + action.cart.count }
                }
                return item
            })

            if(flag)
            {
                return buffState
            }

            return [...state, action.cart]
        }

        default: {
            return state
        }
    }


}

export default cartReducer