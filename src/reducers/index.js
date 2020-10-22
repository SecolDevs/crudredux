import { combineReducers } from 'redux'
import productosReducer from './productosReducer'

// Combinar diferentes Reducers en uno
export default combineReducers({
  productos: productosReducer,
})
