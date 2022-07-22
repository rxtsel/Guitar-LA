import { useState, useEffect } from 'react'
import Router from 'next/router'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto, cantCarrito, resetearCarrito }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])

  const sendShop = () => {
    const carritoEnviar = carrito.map(producto => ({
      nombre: producto.nombre,
      cantidad: producto.cantidad
    }))

    const nombres = []
    const cantidades = []
    const datosFormateados = []

    for (let i = 0; i < carritoEnviar.length; i++) {
      const item = carritoEnviar[i]
      nombres.push(item.nombre)
      cantidades.push(item.cantidad)
    }

    for (let i = 0; i < nombres.length; i++) {
      datosFormateados.push(`${cantidades[i]} ${nombres[i]}`)
    }

    const url = `https://api.whatsapp.com/send?phone=573142216604&text=Hola! ¿Cómo estas?, quiero comprar las siguientes guitarras: ${datosFormateados.join(', ')}. Gracias!`
    window.open(url, '_blank')
    Router.push('../')
    resetearCarrito(true)
  }

  return (
    <div>
      <Layout
        pagina='Carrito'
        cantCarrito={cantCarrito}
      >
        <h1 className='heading'>Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>
          <div className={styles.carrito}>
            <h2 className={styles.subtitles}>Articulos</h2>
            {
              carrito.length === 0
                ? <p className={styles.subtitles}>No hay productos en el carrito.</p>
                : (
                  carrito.map(producto => (
                    <div key={producto.id} className={styles.producto}>
                      <div>
                        <Image
                          layout='responsive'
                          width={120}
                          height={250}
                          src={producto.imagen}
                          alt={`puede ser una imagen de una guitarra ${producto.nombre}`}
                        />
                      </div>
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                        <div className={styles.cantidad}>
                          <p>Cantidad:</p>
                          <select
                            name="cantidad"
                            id="cantidad"
                            className={styles.select}
                            value={producto.cantidad}
                            onChange={e => actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value
                            })}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <p className={styles.precio}>$<span>{producto.precio}</span></p>
                        <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                      </div>
                      <button
                        type='button'
                        className={styles.eliminar}
                        onClick={() => eliminarProducto(producto.id)}
                      >X</button>
                    </div>
                  ))
                )
            }
          </div>
          <div className={styles.resumen}>
            {
              total > 0
                ? (
                  <>
                    <h3 className={styles.subtitles}>Resumen del pedido</h3>
                    <p className={styles.paragraphs}>Iva: $0.00</p>
                    <p className={styles.paragraphs}>Envío: $0.00</p>
                    <p className={styles.contentTotal}>Total a pagar: <span className={styles.total}>${total}</span></p>
                    <input type="submit" value="Comprar" onClick={sendShop}/>
                  </>
                )
                : (
                  <p className={styles.subtitles}>No hay productos.</p>
                )
            }
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default Carrito
