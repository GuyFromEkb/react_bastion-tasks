import { combineReducers } from 'redux'
import typeReducer from './type/typeReducer'

const rootReducer = combineReducers({
    typeProduct: typeReducer,
})

export default rootReducer