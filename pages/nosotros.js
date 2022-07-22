import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = ({ cantCarrito }) => {
  return (
    <div>
      <Layout
        pagina='Nosotros'
        cantCarrito={cantCarrito}
      >
        <main className='contenedor'>
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image
              layout='responsive'
              src="/img/nosotros.jpg"
              alt="puede ser una imagen de una guitarra eléctrica de madera"
              width={600}
              height={450}
              className={styles.imagen}
            />

            <div className="">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quasi asperiores maxime quos sapiente. Aliquam iure, veniam beatae nesciunt distinctio asperiores minus earum non blanditiis, labore nisi laboriosam nihil a natus dignissimos velit eos iusto voluptate ex. Distinctio asperiores possimus hic! Repellat, quod? Delectus vel id deserunt eum laudantium exercitationem saepe mod</p>
              <p>i, optio obcaecati explicabo doloribus, cumque eligendi tempore quis! Quo distinctio totam officiis illo impedit unde porro tempore quis excepturi doloribus beatae dolorum aliquam hic est quia, rem ex, reprehenderit tempora. Necessitatibus harum, quas iste molestias praesentium fuga perferendis officia delectus quasi ex, provident eligendi sed aliquam autem distinctio?</p>
            </div>
          </div>

        </main>
      </Layout>
    </div>
  )
}

export default Nosotros
