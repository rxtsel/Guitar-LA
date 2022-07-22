import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({ guitarras, cantCarrito }) => {
  return (
    <div>
      <Layout
        pagina='Tienda'
        cantCarrito={cantCarrito}
      >
        <main>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
      </Layout>
    </div>
  )
}

// traer items de bd
export async function getServerSideProps () {
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default Tienda
