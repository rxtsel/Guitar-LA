import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = ({ promocion, cantCarrito }) => {
  const router = useRouter()
  const cantCar = cantCarrito.length.toString()
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                <Image
                  width={400}
                  height={100}
                  src="/img/logo.svg"
                  alt='puede ser una imagen del logotipo del sitio web de guitar la'
                />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image
                  layout='fixed'
                  width={25}
                  height={20}
                  src="/img/carrito.png"
                  alt='puede ser una imagen del carrito de compras'
                />
              </a>
            </Link>
            {
              cantCar > 0 && (
                <div className={styles.cantCarrito}>{cantCar}</div>
              )
            }
          </nav>
        </div>
        {
          promocion && (
            <div className={styles.modelo}>
              <h2>Modelo {promocion.titulo}</h2>
              <p>{promocion.descripcion}</p>
              <p className={styles.precio}>${promocion.precio}</p>
              <Link href={`/guitarras/${promocion.url}`}>Ver producto</Link>
            </div>
          )
        }
      </div>
      {
        router.pathname === '/' && (
          <img
            src={promocion.imagen[0].url}
            alt={`puede ser una imagen de una guitarra ${promocion.nombre}`}
            className={styles.imagen}
          />
        )
      }
    </header>
  )
}

export default Header
