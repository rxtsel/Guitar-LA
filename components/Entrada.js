import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'
const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at: publishedAt, url } = entrada
  return (
    <article className={styles.card}>
      <Image
        priority='true'
        src={imagen[0].url}
        layout='responsive'
        width={800}
        height={600}
        alt={`puede ser una imagen de ${titulo}`}
        className={styles.imagen}
      />

      <div className={styles.contenido}>
        <h2>{titulo}</h2>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          Ver contenido
        </Link>
      </div>
    </article>
  )
}

export default Entrada
