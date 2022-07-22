import Entrada from '../components/Entrada'
import styles from '../styles/Grid.module.css'

const ListadoBlog = ({ entradas }) => {
  return (
    <>
      <h1 className='heading'>Blog</h1>
      <div className={styles.grid}>
        {
          entradas.map(entrada => (
            <Entrada
              key={entrada.id}
              entrada={entrada}
            />
          ))}
      </div>
    </>
  )
}

export default ListadoBlog
