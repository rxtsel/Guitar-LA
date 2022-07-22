import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pagina, promocion, cantCarrito }) => {
  return (
    <div>
      <Head>
        <title>Guitar-LA - {pagina}</title>
        <meta name="description" content="Sitio web para venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/img/Favicon.svg" />
      </Head>

      <Header
        promocion={promocion}
        cantCarrito={cantCarrito}
      />

      {children}

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  promocion: null,
  cantCarrito: null
}

export default Layout
