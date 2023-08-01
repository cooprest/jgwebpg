import Image from 'next/image'
import Link from 'next/link'

export default function Contentpage() {
  return (
    <div className="container py-4 my-5">
      <div className="row mb-4 pb-2">
        <div className="col">
          <p
            className="text-4 font-weight-semibold mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={300}
          >
            Tu Éxito Financiero Comienza Aquí: Soluciones Personalizadas y
            Confiables
          </p>
          <p
            className="pb-1 mb-3 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            En Cooperativa de Prestamos, ofrecemos una amplia gama de servicios
            financieros diseñados para satisfacer todas tus necesidades. Nuestro
            enfoque centrado en el cliente y nuestra experiencia comprobada nos
            permiten brindar soluciones a medida para cada situación. Desde
            asesoramiento experto hasta procesos ágiles y transparentes, te
            proporcionamos la confianza y seguridad que buscas en tus decisiones
            financieras.
          </p>
          <p
            className="mb-1 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={700}
          >
            Nuestro compromiso con la excelencia nos impulsa a superar tus
            expectativas en cada interacción. Con Cooperativa de Prestamos, el
            futuro de tus finanzas está en buenas manos. Descubre una
            experiencia financiera excepcional que te permitirá alcanzar tus
            metas con confianza y tranquilidad. ¡Únete a nuestra comunidad de
            clientes satisfechos y da el primer paso hacia un futuro financiero
            exitoso!
          </p>
        </div>
      </div>
      <div
        className="row row-gutter-sm mb-3 appear-animation"
        data-appear-animation="fadeInUpShorterPlus"
        data-appear-animation-delay={950}
      >
        <div className="col-sm-6 col-lg-3 text-center mb-4">
          <Link
            href="/servicios/credito-libre-inversion"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Crédito de Libre Inversión
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center mb-4">
          <Link
            href="/servicios/prestamo-hipotecario"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Préstamo Hipotecario
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center mb-4">
          <Link
            href="/servicios/credito-para-vehiculo"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Crédito Para Vehículo
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center">
          <Link
            href="/servicios/prestamo-para-estudio"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Préstamo Para Estudio
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
