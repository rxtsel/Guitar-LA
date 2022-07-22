import Guitarra from './Guitarra'
import styles from '../styles/Grid.module.css'

const Listado = ({ guitarras }) => {
  return (
    <div className={`contenedor ${styles.grid}`}>
      {
        guitarras.map(guitarra => (
          <Guitarra
            key={guitarra.url}
            guitarra={guitarra}
          />
        ))
      }
    </div>
  )
}

export default Listado
