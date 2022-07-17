import { combineReducers } from 'redux'
import typeReducer from './type/typeReducer'
import productReducer from './porduct/productReducer'
import gostReducer from './gost/gostReducer'
import gostFilterReducer from './gostFilter/gostFilterReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    typeProduct: typeReducer,
    product: productReducer,
    gost: gostReducer,
    gostFilter: gostFilterReducer,
    cart: cartReducer
})

export default rootReducer