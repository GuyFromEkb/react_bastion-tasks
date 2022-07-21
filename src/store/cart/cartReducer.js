

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

            if (flag) {
                return buffState
            }

            return [...state, action.cart]
        }

        case 'CHANGE_COUNTER_IN_CART': {

            return state.map(item => {
                if (item.id === action.id) {

                    return { ...item, count: action.counter }
                }
                return item
            })
        }
        case 'REMOVE_CART_ITEM': {

            return state.filter(item => item.id !== action.id)
        }
        case 'REMOVE_ALL_ITEM': {

            return []
        }

        default: {
            return state
        }
    }


}

export default cartReducer



// const initialValue =
//     [
//         {
//             "id": "122sd123sd",
//             "gost": [
//                 "ОСТ 36-146-88",
//                 "MKR 122"
//             ],
//             "name": "Опора тавровая хомутовая  ТХ",
//             "price": 3222,
//             "count": 1
//         },
//         {
//             "id": "dsa2Lks1",
//             "gost": [
//                 "НТС 65-06",
//                 "ГОСТ 14911-82"
//             ],
//             "name": " цельная приварная  КП",
//             "price": 220,
//             "count": 1
//         },
//         {
//             "id": "msjL29sa",
//             "gost": [
//                 "ОСТ 36-146-88",
//                 "НТС 65-06",
//                 "MKR 122"
//             ],
//             "name": "Шлюз ВНПП3",
//             "price": 1308,
//             "count": 1
//         }
//     ]
