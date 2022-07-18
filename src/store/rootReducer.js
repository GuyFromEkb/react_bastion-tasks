import { combineReducers } from 'redux'
import typeReducer from './type/typeReducer'
import productReducer from './porduct/productReducer'
import gostReducer from './gost/gostReducer'
import FilterReducer from './Filter/FilterReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    typeProduct: typeReducer,
    product: productReducer,
    gost: gostReducer,
    filter: FilterReducer,
    cart: cartReducer
})

export default rootReducer