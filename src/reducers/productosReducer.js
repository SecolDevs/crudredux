import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from '../types'

// Cada Reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
}

// Exporta una funcion por defecto que se encarga de manejar el state de la app
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
