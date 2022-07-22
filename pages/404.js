import Layout from '../components/Layout'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrada = ({ cantCarrito }) => {
  return (
    <Layout
      pagina={'Página No Encontrada'}
      cantCarrito={cantCarrito}
    >

      <div className={styles.no_encontrado}>

        <h1 className='heading'>Página no encontrada. :(</h1>

      </div>

    </Layout>
  )
}

export default NoEncontrada
