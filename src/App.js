import React from 'react'
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route path="/productos/editar/:id" component={EditarProducto} />
            <Route path="/productos/nuevo" component={NuevoProducto} />
            <Route path="/" component={Productos} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
