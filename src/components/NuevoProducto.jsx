import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = () => {
  // State del componente
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
  })

  const { nombre, precio } = producto

  //usar useDispathc y te crea una funcion
  const dispatch = useDispatch()

  // Manda llamar el action de productoAcion
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto))

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    })
  }

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault()

    // Validar Formulaior
    if (nombre.trim === '' || Number(precio) <= 0) return
    producto.precio = Number(precio)
    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto(producto)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Agregar Nuevo Producto</h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  id="precio"
                  value={precio}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto
