import { combineReducers } from 'redux'
import typeReducer from './type/typeReducer'
import productReducer from './porduct/productReducer'
import gostReducer from './gost/gostReducer'
import gostFilterReducer from './gostFilter/gostFilterReducer'

const rootReducer = combineReducers({
    typeProduct: typeReducer,
    product: productReducer,
    gost: gostReducer,
    gostFilter: gostFilterReducer
})

export default rootReducer