import { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/normalize.css'

function MyApp ({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])
  const [cantCarrito, setCantCarrito] = useState(carrito)

  useEffect(() => {
    const carritoLS = JSON.parse(window.localStorage.getItem('carrito')) ?? []
    setCarrito(carritoLS)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = producto => {
    if (carrito.some(articulo => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map(articulo => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad // + articulo.cantidad <-Sí se quiere ir sumando...
        }
        return articulo
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = datos => {
    const carritoActualizado = carrito.map(articulo => {
      if (articulo.id === datos.id) {
        articulo.cantidad = datos.cantidad // + articulo.cantidad <-Sí se quiere ir sumando...
      }
      return articulo
    })

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }

  useEffect(() => {
    setCantCarrito(carrito)
  }, [carrito])

  const resetearCarrito = (bolean) => {
    if (bolean) {
      setCarrito([])
      setCantCarrito(carrito)
    }
  }

  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
    cantCarrito={cantCarrito}
    resetearCarrito={resetearCarrito}
  />
}

export default MyApp
