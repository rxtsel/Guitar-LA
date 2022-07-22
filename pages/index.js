import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home ({ guitarras, curso, blog, promocion, cantCarrito }) {
  return (
    <div>
      <Layout
        pagina='Inicio'
        promocion={promocion}
        cantCarrito={cantCarrito}
      >
        <main className='contenedor'>
          <h1 className='heading'>Lo más vendido</h1>

          <Listado guitarras={guitarras} />

        </main>

        <Curso curso={curso} />

        <section className="contenedor">
          <ListadoBlog entradas={blog}/>
        </section>

      </Layout>
    </div>
  )
}

// traer items de bd
export async function getServerSideProps () {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=3`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`
  const urlPromo = `${process.env.API_URL}/promocion`

  const [resGuitarras, resCursos, resBlog, resPromo] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs),
    fetch(urlPromo)
  ])

  const [guitarras, curso, blog, promocion] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
    resPromo.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      blog,
      promocion
    }
  }
}
