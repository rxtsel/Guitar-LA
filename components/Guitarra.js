import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({ guitarra }) => {
  const { nombre, descripcion, imagen, precio, url } = guitarra
  return (
    <div className={styles.guitarra}>
      <Image
        layout='responsive'
        width={170}
        height={350}
        src={imagen[0].url}
        alt={`puede ser una imagen de una guitarra ${nombre}`}
        priority='true'
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
