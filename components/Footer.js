import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>

        <p className={styles.copyright}>Todos los derechos reservados.
          <span className={styles.span}>Sitio web hecho sin fines de lucro, meramente educativa.
            <br />
          Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://twitter.com/rxtsel" target="_blank" rel="noreferrer">@rxtsel</a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
