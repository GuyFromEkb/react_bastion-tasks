import { combineReducers } from 'redux'
import typeReducer from './type/typeReducer'
import productReducer from './porduct/productReducer'

const rootReducer = combineReducers({
    typeProduct: typeReducer,
    product: productReducer
})

export default rootReducer