import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada, cantCarrito }) => {
  const { contenido, imagen, published_at: publishedAt, titulo } = entrada
  return (
    <Layout
      pagina={titulo}
      cantCarrito={cantCarrito}
    >
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            priority="true"
            src={imagen[0].url}
            layout="responsive"
            width={800}
            height={600}
            alt={`puede ser una imagen de ${titulo}`}
            className={styles.imagenEntrada}
          />

          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths () {
  const url = `${process.env.API_URL}/blogs`
  const response = await fetch(url)
  const entradas = await response.json()
  const paths = entradas.map(entrada => ({
    params: { url: entrada.url }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { url } }) {
  const link = `${process.env.API_URL}/blogs?url=${url}`
  const response = await fetch(link) // renombré la variable para que no se confunda con el parametro de la funcion
  const entrada = await response.json()

  return {
    props: {
      entrada: entrada[0]
    }
  }
}

export default EntradaBlog
