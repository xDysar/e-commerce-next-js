import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, Tienda de musica"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Donec sed egestas ex, in tempor quam. Vestibulum mattis justo vel
              magna hendrerit semper. Suspendisse tortor augue, egestas eu arcu
              vitae, feugiat suscipit turpis. In hac habitasse platea dictumst.
              Fusce ut sem nec orci varius suscipit. Nulla facilisi.
            </p>
            <p>
              Maecenas malesuada sapien ut mauris condimentum, id eleifend
              turpis ultricies. Aliquam vitae leo ipsum. Pellentesque sit amet
              leo vel mauris maximus dignissim sit amet blandit enim.
              Suspendisse magna nisi, bibendum et libero ac, euismod efficitur
              libero. Mauris vitae ultricies nulla. Vestibulum lobortis cursus
              mi quis tristique. Proin pulvinar mauris nisi, at luctus nulla
              luctus quis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
