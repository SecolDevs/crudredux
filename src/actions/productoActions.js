import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from '../types'

// Crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return () => {
    console.log(producto)
  }
}
