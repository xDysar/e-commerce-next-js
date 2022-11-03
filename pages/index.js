import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de Musica, ventas de guitarras y mas!'}
      >
        <h2>Hola mundo en Next js</h2>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  )
}
