import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra, agregarCarrito, cantCarrito }) => {
  const [cantidad, setCantidad] = useState(0)
  const [alerta, setAlerta] = useState(false)
  const [succes, setSucces] = useState(false)
  const { nombre, descripcion, imagen, precio, id } = guitarra[0]
  const handleSubmit = e => {
    e.preventDefault()

    // alerta
    if (cantidad < 1) {
      setAlerta(true)
      setTimeout(() => {
        setAlerta(false)
      }, 3000)
      return
    }
    setAlerta(false)

    // agregar al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen[0].url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)
    setSucces(true)
    setTimeout(() => {
      setSucces(false)
    }, 3000)
  }
  return (
    <Layout
      pagina={`${nombre} Guitarra`}
      cantCarrito={cantCarrito}
    >
      <div className={styles.guitarra}>
        <Image
          layout='responsive'
          width={170}
          height={350}
          src={imagen[0].url}
          alt={`puede ser una imagen de una guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <select name="cantidad" id="cantidad" value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
              <option value="0" defaultValue disabled>Cantidad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />

            {
              alerta && (
                <p className={styles.alerta}>Cantidad no válida</p>
              )
            }
            {
              succes && (
                <p className={styles.succes}>Agregado exitósamente.</p>
              )
            }

          </form>

        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps ({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)
  const guitarra = await respuesta.json()
  return {
    props: {
      guitarra
    }
  }
}
export default Producto
