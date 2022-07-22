import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({ entradas, cantCarrito }) => {
  return (
    <div>
      <Layout
        pagina='Blog'
        cantCarrito={cantCarrito}
      >
        <main className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </main>
      </Layout>
    </div>
  )
}

export async function getStaticProps () {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const response = await fetch(url)
  const entradas = await response.json()

  return {
    props: {
      entradas
    }
  }
}
export default Blog
