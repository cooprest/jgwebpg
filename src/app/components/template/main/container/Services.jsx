import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8 text-center">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              Ejemplos de Préstamos y Servicios
            </h2>
          </div>
          <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={600}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-5 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            ¡Descubre ejemplos de financiamiento sorprendentes! Desde soluciones
            hipotecarias hasta créditos para tus proyectos. Tasas competitivas,
            plazos flexibles y procesos ágiles te esperan. ¡Empieza a imaginar
            tu futuro con nuestras opciones a medida para ti!
          </p>
          <p
            className="font-weight-light text-3-5 mb-5 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            <strong className="font-weight-bold">
              Ejemplo 1 para un préstamo de $2.000.000 de pesos. 
            </strong>
            <br />
            Se aplica una tasa de interés del 2.2% TAE (Tasa Anual Equivalente).
            <br />
            Con un plazo de 12 meses. <br />
            Las cuotas mensuales debidas son de $210,667 de pesos y <br />
            un pago total de $2,528,000 incluyendo intereses.
          </p>
          <p
            className="font-weight-light text-3-5 mb-5 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            <strong className="font-weight-bold">
              Ejemplo 2 para un préstamo de $30.0000.000 de pesos. 
            </strong>
            <br />
            Se aplica una tasa de interés del 2.2% TAE (Tasa Anual Equivalente).
            <br />
            Con un plazo de 24 meses. <br />
            Las cuotas mensuales debidas son de $3.820.000 de pesos y <br />
            un pago total de $45.840.000 incluyendo intereses.
          </p>
          <p
            className="font-weight-light text-3-5 mb-5 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            <strong className="font-weight-bold">
              Ejemplo 3 para un préstamo de $100.0000.000 de pesos. 
            </strong>
            <br />
            Se aplica una tasa de interés del 2.2% TAE (Tasa Anual Equivalente).
            <br />
            Con un plazo de 24 meses. <br />
            Las cuotas mensuales debidas son de $10.533.334 de pesos y <br />
            un pago total de $126.400.000 incluyendo intereses.
          </p>
        </div>
      </div>
      <div
        className="row row-gutter-sm mb-5 appear-animation"
        data-appear-animation="fadeInUpShorter"
        data-appear-animation-delay={750}
      >
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-lg-0">
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
                Crédito Libre Inversión
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-lg-0">
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
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-sm-0">
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
      <div className="row">
        <div className="col text-center">
          <Link
            href="/servicios"
            className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={850}
          >
            SABER MÁS
          </Link>
        </div>
      </div>
    </div>
  )
}
